"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCompositeVolatility, fromContractUnits } from "../../lib/contract";

const Hero = () => {
  const [volatility, setVolatility] = useState<string>("--");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVolatility = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const volatilityData = await getCompositeVolatility();

        // Convert the raw value to percentage format if needed
        const formattedVolatility = volatilityData.includes("%")
          ? volatilityData
          : fromContractUnits(volatilityData, 4).toFixed(2);

        setVolatility(`${formattedVolatility}%`);
      } catch (err) {
        console.error("Failed to fetch volatility:", err);
        setError("Failed to load");
        setVolatility("--");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVolatility();

    // Refresh volatility data every 30 seconds
    const interval = setInterval(fetchVolatility, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative containerx px-6 pt-48 pb-20 w-full h-screen"
    >
      {/* Perspective Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[25%] overflow-hidden animate-slide-in-top">
        <Image
          src="/PerspectiveGridUp.svg"
          alt="Perspective Grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated Stars */}
      <div className="absolute top-[15%] left-[10%] z-15 animate-star-pop-1">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={36} height={36} />
        </div>
      </div>
      <div className="absolute top-[25%] right-[15%] z-15 animate-star-pop-2">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={28} height={28} />
        </div>
      </div>
      <div className="absolute top-[35%] left-[20%] z-15 animate-star-pop-3">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={24} height={24} />
        </div>
      </div>
      <div className="absolute top-[20%] left-[70%] z-15 animate-star-pop-4">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={32} height={32} />
        </div>
      </div>
      <div className="absolute top-[40%] right-[25%] z-15 animate-star-pop-5">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={40} height={40} />
        </div>
      </div>
      <div className="absolute top-[30%] left-[50%] z-15 animate-star-pop-6">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={36} height={36} />
        </div>
      </div>
      <div className="absolute top-[45%] left-[15%] z-15 animate-star-pop-7">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={30} height={30} />
        </div>
      </div>
      <div className="absolute top-[50%] right-[10%] z-15 animate-star-pop-8">
        <div className="animate-star-hover">
          <Image src="/Star.svg" alt="Star" width={24} height={24} />
        </div>
      </div>

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
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 animate-rise-up">
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
        <h1 className="text-white text-4xl md:text-7xl font-semibold leading-tight">
          <div className="mb-2">Bet on chaos</div>
          <div>Hedge against calm</div>
        </h1>
      </div>

      {/* Hero Buttons */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        <Link
          href="https://aptos.swapthesurge.com"
          className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-teal-600 flex items-center gap-2"
        >
          Launch App
          <ArrowRight />
        </Link>
      </div>

      <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-white text-lg md:text-xl font-light mb-6">
          APTOS VOLATILITY INDEX{" "}
        </h1>
        <h1 className="text-white text-4xl md:text-8xl font-semibold tracking-tighter">
          {isLoading ? (
            <span className="animate-pulse">--</span>
          ) : error ? (
            <span className="text-red-400 text-2xl md:text-4xl">Error</span>
          ) : (
            volatility
          )}
        </h1>
        {error && (
          <p className="text-red-300 text-sm mt-2">
            Failed to load volatility data
          </p>
        )}
      </div>

      <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 z-30 text-center">
        <h1 className="text-white text-lg md:text-xl font-light mb-6">
          Trade volatility directly on Aptos with precision instruments.
        </h1>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-[10%] left-0 w-full h-[40%] z-20 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-[10%] z-20 bg-black"></div>

      <div className="absolute bottom-[10%] left-0 w-full h-[50%] overflow-hidden animate-slide-in-bottom">
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
