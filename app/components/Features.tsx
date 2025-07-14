import React from "react";
import { GlowingEffectDemo } from "./GlowingEffectGrid";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built For Volatility. Engineered For Precision.
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto">
            Each component of our protocol is designed to give you accurate
            exposure to risk, on-chain volatility.
          </p>
        </div>

        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Features;
