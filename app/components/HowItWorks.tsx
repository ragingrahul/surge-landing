import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "TRACK REALIZED VOLATILITY",
      description:
        "Our Oracle Aggregates On-Chain Data To Calculate Realized Volatility.",
    },
    {
      number: "02",
      title: "TRACK REALIZED VOLATILITY",
      description:
        "Our Oracle Aggregates On-Chain Data To Calculate Realized Volatility.",
    },
    {
      number: "03",
      title: "TRACK REALIZED VOLATILITY",
      description:
        "Our Oracle Aggregates On-Chain Data To Calculate Realized Volatility.",
    },
    {
      number: "04",
      title: "TRACK REALIZED VOLATILITY",
      description:
        "Our Oracle Aggregates On-Chain Data To Calculate Realized Volatility.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black flex items-center">
      {/* Perspective Grid Background - Top */}
      <div className="absolute top-0 left-0 w-full h-[25%] overflow-hidden">
        <Image
          src="/PerspectiveGridUp.svg"
          alt="Perspective Grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Perspective Grid Background - Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden ">
        <Image
          src="/PerspectiveGridDown.svg"
          alt="Perspective Grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Noise Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <Image src="/Noise.png" alt="Noise" fill className="object-cover" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-[30%] z-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] z-20 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto h-screen px-6 relative z-20">
        {/* Title Section - Positioned Higher */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each component of our protocol is designed to give you accurate
            exposure to risk, on-chain volatility.
          </p>
        </div>

        {/* Steps Grid - Positioned Between Grids */}
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-left px-8 relative">
                {/* Vertical divider */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-600"></div>
                )}

                <div className="mb-6">
                  <div className="text-teal-500 text-4xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
