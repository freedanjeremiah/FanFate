import { request, gql } from "graphql-request";
import { chainConfig } from "@/config/contracts";

export const getUserMarkets = async (user: string, chainId: number) => {
  try {
    const query = gql`
      query getUserMarkets {
        user(id: "${user}") {
          id
          totalNoBought
          totalNoSold
          totalReceived
          totalSpent
          totalRewards
          totalYesBought
    userAddress
    totalYesSold
    marketsParticipated {
      id
      noInMarket
      yesInMarket
      rewards
      spent
      market {
        id
        marketContract
        question
        resolved
        totalNo
        totalPriceToken
        totalStaked
        totalYes
        won
      }
    }
  }
}`;
    const data: any = await request(
      chainConfig[chainId].contracts.subgraphUrl,
      query
    );
    console.log(data.user);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};