// CoinGecko API service for fetching cryptocurrency data
const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";

export interface AptosPriceData {
  aptos: {
    usd: number;
    usd_24h_change: number;
  };
}

export interface AptosCoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

export interface HistoricalPrice {
  timestamp: number;
  price: number;
}

export interface MarketChartData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export async function getAptosPrice(): Promise<AptosPriceData> {
  try {
    const response = await fetch(
      `${COINGECKO_BASE_URL}/simple/price?ids=aptos&vs_currencies=usd&include_24hr_change=true`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Aptos price:", error);
    throw error;
  }
}
export async function getAptosMarketData(): Promise<AptosCoinData> {
  try {
    const response = await fetch(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd&ids=aptos&order=market_cap_desc&per_page=1&page=1&sparkline=false`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching Aptos market data:", error);
    throw error;
  }
}

export async function getAptosHistoricalData(
  days: number = 7
): Promise<HistoricalPrice[]> {
  try {
    const response = await fetch(
      `${COINGECKO_BASE_URL}/coins/aptos/market_chart?vs_currency=usd&days=${days}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MarketChartData = await response.json();

    // Convert the array format to our interface
    return data.prices.map(([timestamp, price]) => ({
      timestamp,
      price,
    }));
  } catch (error) {
    console.error("Error fetching Aptos historical data:", error);
    throw error;
  }
}

export function formatChartDate(timestamp: number, days: number): string {
  const date = new Date(timestamp);

  if (days <= 1) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (days <= 7) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}

export function formatPrice(price: number): string {
  if (price >= 1) {
    return `$${price.toFixed(2)}`;
  } else {
    return `$${price.toFixed(4)}`;
  }
}

export function formatLargeNumber(num: number): string {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  } else if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(2)}K`;
  } else {
    return `$${num.toFixed(2)}`;
  }
}

export function formatPercentageChange(change: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}
