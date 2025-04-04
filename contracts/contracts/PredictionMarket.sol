// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "./NoToken.sol";
import "./YesToken.sol";

contract PredictionMarket is Ownable, ReentrancyGuard, Pausable {
    IERC20 public priceToken;
    YesToken public yesToken;
    NoToken public noToken;
    address public resolver;

    struct Market {
        uint256 id;
        string question;
        uint256 endTime;
        uint256 totalStaked;
        uint256 totalYes;
        uint256 totalNo;
        bool resolved;
        bool won;
        uint256 totalPriceToken;
    }

    Market public market;

    uint256 private constant INITIAL_LIQUIDITY = 1000e18; // 1000 tokens of each type

    event MarketResolved(uint256 indexed marketId, bool result, uint256 totalPriceToken);
    event TokenOperation(address indexed user, uint256 indexed marketId, uint8 opType, uint8 tokenType, uint256 amount, uint256 cost);
    event RewardClaimed(address indexed user, uint256 indexed marketId, uint256 rewardAmount);

    constructor(address _priceToken, address _yesToken, address _noToken, uint256 _marketId, string memory _question, uint256 _endtime, address _creator) Ownable(_creator) {
        require(_priceToken != address(0) && _yesToken != address(0) && _noToken != address(0) && _endtime > block.timestamp, "Invalid input");

        priceToken = IERC20(_priceToken);
        yesToken = YesToken(_yesToken);
        noToken = NoToken(_noToken);
        resolver = _creator;

        market = Market({id: _marketId, question: _question, endTime: _endtime, totalStaked: 0, totalYes: 0, totalNo: 0, resolved: false, won: false, totalPriceToken: 0});
    }

    modifier onlyResolver() {
        require(msg.sender == resolver, "Only resolver can call this function");
        _;
    }

    modifier marketActive() {
        require(!market.resolved && block.timestamp < market.endTime, "Market not active");
        _;
    }

    function initializeLiquidity() public marketActive nonReentrant whenNotPaused {
        require(market.totalYes == 0 && market.totalNo == 0, "Liquidity already initialized");
        yesToken.mint(address(this), market.id, INITIAL_LIQUIDITY, "");
        noToken.mint(address(this), market.id, INITIAL_LIQUIDITY, "");
        market.totalYes = INITIAL_LIQUIDITY;
        market.totalNo = INITIAL_LIQUIDITY;
    }

    function resolve(bool isYesWon) public onlyResolver {
        require(!market.resolved, "Market already resolved");

        market.resolved = true;
        market.won = isYesWon;
        market.totalPriceToken = priceToken.balanceOf(address(this));

        emit MarketResolved(market.id, market.won, market.totalPriceToken);
    }

    function getCost(bool isYesToken, uint256 amount) public view returns (uint256) {
        require(amount > 0, "Amount must be greater than zero");

        uint256 cost;
        if (isYesToken) {
            cost = (amount * market.totalNo) / market.totalYes;
        } else {
            cost = (amount * market.totalYes) / market.totalNo;
        }

        return cost;
    }

    function buy(bool isYesToken, uint256 amount) public marketActive nonReentrant whenNotPaused {
        require(amount > 0, "Amount must be greater than zero");

        uint256 cost = getCost(isYesToken, amount);
        priceToken.transferFrom(msg.sender, address(this), cost);

        if (isYesToken) {
            require(yesToken.balanceOf(address(this), market.id) >= amount, "Insufficient liquidity");
            market.totalYes += amount;
        } else {
            require(noToken.balanceOf(address(this), market.id) >= amount, "Insufficient liquidity");
            market.totalNo += amount;
        }

        market.totalStaked += amount;

        if (isYesToken) {
            yesToken.safeTransferFrom(address(this), msg.sender, market.id, amount, "");
        } else {
            noToken.safeTransferFrom(address(this), msg.sender, market.id, amount, "");
        }

        emit TokenOperation(msg.sender, market.id, 1, isYesToken ? 1 : 2, amount, cost);
    }

    function sell(bool isYesToken, uint256 amount) public marketActive nonReentrant whenNotPaused {
        require(amount > 0, "Amount must be greater than zero");

        uint256 returnAmount = getCost(isYesToken, amount);

        if (isYesToken) {
            require(yesToken.balanceOf(msg.sender, market.id) >= amount, "Insufficient balance");
            market.totalYes -= amount;
        } else {
            require(noToken.balanceOf(msg.sender, market.id) >= amount, "Insufficient balance");
            market.totalNo -= amount;
        }

        market.totalStaked -= amount;

        priceToken.transfer(msg.sender, returnAmount);

        emit TokenOperation(msg.sender, market.id, 2, isYesToken ? 1 : 2, amount, returnAmount);
    }

    function claimReward() public nonReentrant whenNotPaused {
        require(market.resolved, "Market not resolved");

        uint256 reward = 0;
        uint256 userBalance;
        uint256 totalWinningStake = market.won ? market.totalYes : market.totalNo;

        require(totalWinningStake > 0, "No winning stake");

        if (market.won) {
            userBalance = yesToken.balanceOf(msg.sender, market.id);
        } else {
            userBalance = noToken.balanceOf(msg.sender, market.id);
        }

        require(userBalance > 0, "No tokens held to claim rewards");

        reward = (userBalance * market.totalPriceToken) / totalWinningStake;
        priceToken.transfer(msg.sender, reward);

        if (market.won) {
            yesToken.burn(msg.sender, market.id, userBalance);
        } else {
            noToken.burn(msg.sender, market.id, userBalance);
        }

        emit RewardClaimed(msg.sender, market.id, reward);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function emergencyWithdraw(address token, uint256 amount) external onlyOwner {
        require(market.resolved, "Market not resolved");
        IERC20(token).transfer(owner(), amount);
    }
}
