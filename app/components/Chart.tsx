"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  getAptosHistoricalData,
  formatChartDate,
  formatPrice,
  HistoricalPrice,
} from "../../lib/coinGeckoApi";

export const description = "Aptos Price Chart with Real-time Data";

interface ChartDataPoint {
  date: string;
  price: number;
  timestamp: number;
}

const chartConfig = {
  price: {
    label: "Price",
    color: "#14b8a6", // teal-500
  },
} satisfies ChartConfig;

const TIME_PERIODS = [
  { label: "1D", days: 1 },
  { label: "7D", days: 7 },
  { label: "30D", days: 30 },
  { label: "90D", days: 90 },
  { label: "1Y", days: 365 },
];

export function ChartLineLinear() {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(7);
  const [priceChange, setPriceChange] = useState<number>(0);

  const fetchChartData = async (days: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const historicalData: HistoricalPrice[] = await getAptosHistoricalData(
        days
      );

      if (historicalData.length === 0) {
        throw new Error("No data received");
      }

      // Convert to chart format
      const formattedData: ChartDataPoint[] = historicalData.map((item) => ({
        date: formatChartDate(item.timestamp, days),
        price: item.price,
        timestamp: item.timestamp,
      }));

      // Calculate price change
      const firstPrice = historicalData[0]?.price || 0;
      const lastPrice = historicalData[historicalData.length - 1]?.price || 0;
      const change = ((lastPrice - firstPrice) / firstPrice) * 100;

      setPriceChange(change);
      setChartData(formattedData);
    } catch (err) {
      console.error("Failed to fetch chart data:", err);
      setError("Failed to load chart data");
      setChartData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData(selectedPeriod);

    // Refresh data every 5 minutes
    const interval = setInterval(() => {
      fetchChartData(selectedPeriod);
    }, 300000);

    return () => clearInterval(interval);
  }, [selectedPeriod]);

  const handlePeriodChange = (days: number) => {
    setSelectedPeriod(days);
  };

  const currentPrice =
    chartData.length > 0 ? chartData[chartData.length - 1]?.price : 0;
  const isPositive = priceChange >= 0;

  if (error) {
    return (
      <Card className="bg-[#171717] border-gray-700">
        <CardHeader className="text-center py-8">
          <CardTitle className="text-red-400 flex items-center justify-center gap-2">
            <Activity className="h-5 w-5" />
            Chart Error
          </CardTitle>
          <CardDescription className="text-gray-400">
            {error}. Please try again later.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-[#171717] border-gray-700">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-white text-xl">
              Aptos Price Chart
            </CardTitle>
            <CardDescription className="text-gray-400">
              Real-time price data from CoinGecko
            </CardDescription>
          </div>

          {/* Time Period Selector */}
          <div className="flex gap-1 bg-gray-800 rounded-lg p-1">
            {TIME_PERIODS.map((period) => (
              <button
                key={period.days}
                onClick={() => handlePeriodChange(period.days)}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  selectedPeriod === period.days
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Price Display */}
        {!isLoading && currentPrice > 0 && (
          <div className="flex items-center gap-4 mt-4">
            <div className="text-3xl font-bold text-white">
              {formatPrice(currentPrice)}
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {isPositive ? "+" : ""}
              {priceChange.toFixed(2)}%
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0 pb-0">
        {isLoading ? (
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-gray-400 flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-teal-500 border-t-transparent"></div>
              Loading chart data...
            </div>
          </div>
        ) : chartData.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-gray-400">No data available</div>
          </div>
        ) : (
          <div className="relative">
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#374151"
                    vertical={false}
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    tick={{ fill: "#9CA3AF", fontSize: 11 }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    tick={{ fill: "#9CA3AF", fontSize: 11 }}
                    tickFormatter={(value) => formatPrice(value)}
                    domain={[
                      "dataMin - dataMin * 0.01",
                      "dataMax + dataMax * 0.01",
                    ]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        hideLabel={false}
                        className="bg-gray-800/95 border-gray-600 shadow-lg backdrop-blur-sm"
                        formatter={(value) => [
                          formatPrice(Number(value)),
                          "Price",
                        ]}
                      />
                    }
                  />
                  <defs>
                    <linearGradient
                      id="priceGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    type="monotone"
                    stroke="none"
                    fill="url(#priceGradient)"
                  />
                  <Line
                    dataKey="price"
                    type="monotone"
                    stroke="#14b8a6"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: "#14b8a6",
                      stroke: "#ffffff",
                      strokeWidth: 2,
                      filter: "drop-shadow(0 0 6px rgba(20, 184, 166, 0.4))",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Gradient overlay for better visual effect */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none" />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm border-t border-gray-700/50 pt-6 mt-4">
        <div className="flex gap-2 leading-none font-medium text-gray-300">
          <Activity className="h-4 w-4 text-teal-500" />
          Live data from CoinGecko API
        </div>
        <div className="text-gray-400 leading-none">
          Showing {selectedPeriod === 1 ? "24 hour" : `${selectedPeriod} day`}{" "}
          price movement
        </div>
      </CardFooter>
    </Card>
  );
}
