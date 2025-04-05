export interface Market {
    id: string;
    title: string;
    description?: string;
    platform?: string;
    metric?: string;
    currentMetric?: number;
    target?: number;
    yesPrice: number;
    noPrice: number;
    volume24h: number;
    liquidity: number;
    endDate: string;
    creatorHandle?: string;
    isOnChain: boolean;
  }
  
  export interface PlatformIconProps {
    platform?: string;
  }
  
  export interface MarketDetailsProps {
    market: Market;
    formattedMetrics: {
      currentMetric: string | null;
      target: string | null;
      volume: string;
      liquidity: string;
    };
  }
  
  export interface PriceBoxProps {
    type: "buy" | "sell";
    price: number;
    className: string;
    textColor: string;
  }
  
  export interface MarketStatsProps {
    volume: string;
    liquidity: string;
  }
  
  export interface Trade {
    type: "buy" | "sell";
    outcome: "yes" | "no";
    amount: number;
    price: number;
    timestamp: string;
    trader: string;
  }
  
  export interface MarketPageProps {
    market: Market;
    trades: Trade[];
    activeTab: string;
    onTabChange: (value: string) => void;
  }
  
  export interface TradingInterfaceProps {
    market: Market;
    activeTab: string;
    onTrade: (type: "buy" | "sell") => Promise<void>;
    onApprove: () => Promise<void>;
    onAmountChange: (value: string) => Promise<void>;
    onTabChange: (value: string) => void;
    amount: string;
    estimatedCost: number;
    isLoading: boolean;
    error?: Error;
  }
  
  export interface MarketHeaderProps {
    title: string;
    creatorHandle?: string;
    target?: number;
    onMint: () => Promise<void>;
    isMintPending: boolean;
  