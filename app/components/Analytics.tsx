"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TrendingUp, TrendingDown } from "lucide-react";
import { ChartLineLinear } from "./Chart";
import {
  getAptosMarketData,
  formatPrice,
  formatPercentageChange,
  AptosCoinData,
} from "@/lib/coinGeckoApi";

const Analytics = () => {
  const [marketData, setMarketData] = useState<AptosCoinData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMarketData = async () => {
    try {
      setError(null);
      const data = await getAptosMarketData();
      setMarketData(data);
    } catch (err) {
      console.error("Failed to fetch market data:", err);
      setError("Failed to load price data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();

    // Refresh data every 2 minutes
    const interval = setInterval(() => {
      fetchMarketData();
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const currentPrice = marketData?.current_price || 0;
  const priceChange24h = marketData?.price_change_24h || 0;
  const priceChangePercentage24h = marketData?.price_change_percentage_24h || 0;
  const isPositive = priceChangePercentage24h >= 0;

  return (
    <section id="analytics" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header with Stats */}
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Track Chaos.
              <br />
              Predict The Edge.
            </h2>

            {/* Statistics Row */}
            <div className="flex items-end gap-8 md:gap-12">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                  APTOS CURRENT VALUE
                </p>
                <div className="text-4xl font-bold text-teal-400">
                  {isLoading ? (
                    <div className="animate-pulse bg-gray-600 h-10 w-20 rounded"></div>
                  ) : error ? (
                    <span className="text-red-400 text-xl">Error</span>
                  ) : (
                    formatPrice(currentPrice)
                  )}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-16 bg-gray-600 mb-2"></div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                  24H CHANGE
                </p>
                <div
                  className={`text-4xl font-bold flex items-center gap-2 ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-pulse bg-gray-600 h-10 w-20 rounded"></div>
                  ) : error ? (
                    <span className="text-red-400 text-xl">Error</span>
                  ) : (
                    <>
                      {isPositive ? (
                        <TrendingUp className="h-8 w-8" />
                      ) : (
                        <TrendingDown className="h-8 w-8" />
                      )}
                      {isPositive ? "+" : ""}
                      {priceChange24h.toFixed(3)}
                    </>
                  )}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-16 bg-gray-600 mb-2"></div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                  24H CHANGE %
                </p>
                <div
                  className={`text-4xl font-bold ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-pulse bg-gray-600 h-10 w-20 rounded"></div>
                  ) : error ? (
                    <span className="text-red-400 text-xl">Error</span>
                  ) : (
                    formatPercentageChange(priceChangePercentage24h)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
            <Image
              src="/Ellipse 13.svg"
              alt="Ellipse 13"
              width={1000}
              height={800}
            />
          </div>

          {/* Chart Container */}
          <div className="bg-[#171717] rounded-3xl p-8 mb-8 ">
            <ChartLineLinear />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
