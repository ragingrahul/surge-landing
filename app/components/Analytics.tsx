import React from "react";
import { ChartLineLinear } from "./Chart";

const Analytics = () => {
  return (
    <section className="py-20 bg-black">
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
                <div className="text-4xl font-bold text-teal-400">$4.37</div>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-16 bg-gray-600 mb-2"></div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                  1D CHANGE
                </p>
                <div className="text-4xl font-bold text-green-400">▲ 0.23</div>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-16 bg-gray-600 mb-2"></div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                  1D CHANGE
                </p>
                <div className="text-4xl font-bold text-green-400">+5.02%</div>
              </div>
            </div>
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
