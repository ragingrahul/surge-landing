import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative containerx px-6 pt-48 pb-20 w-full h-screen">
      {/* Perspective Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[25%] overflow-hidden">
        <Image
          src="/PerspectiveGridUp.svg"
          alt="Perspective Grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">{/* Add your hero content here */}</div>

      {/* Noise Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-screen overflow-hidden z-10">
        <Image src="/Noise.png" alt="Noise" fill className="object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <Image
          src="/Ellipse 13.svg"
          alt="Ellipse 13"
          width={1200}
          height={1200}
        />
      </div>

      {/* Stand SVG */}
      <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <Image
          src="/stand.svg"
          alt="Stand"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-[65%] left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-white text-4xl md:text-7xl leading-tight">
          <div className="mb-2">Bet on chaos</div>
          <div>Hedge against calm</div>
        </h1>
      </div>

      {/* Hero Buttons */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        <button className="bg-black border border-gray-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-gray-400 flex items-center gap-2">
          Variance Swap
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-teal-600 flex items-center gap-2">
          Volatility ETF
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-white text-lg md:text-xl font-light mb-6">
          APTOS VOLATILITY INDEX{" "}
        </h1>
        <h1 className="text-white text-4xl md:text-8xl font-semibold tracking-tighter">
          12.54%
        </h1>
      </div>

      <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 z-30 text-center">
        <h1 className="text-white text-lg md:text-xl font-light mb-6">
          Trade volatility directly on Aptos with precision instruments.
        </h1>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-[10%] left-0 w-full h-[40%] z-20 bg-gradient-to-b from-transparent to-black"></div>

      <div className="absolute bottom-[10%] left-0 w-full h-[50%] overflow-hidden">
        <Image
          src="/PerspectiveGridDown.svg"
          alt="Perspective Grid"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
