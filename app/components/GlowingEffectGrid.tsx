"use client";

import { TrendingUp, Hexagon, ArrowRightLeft } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-10 md:grid-rows-2 lg:gap-4">
      <GridItem
        area="md:[grid-area:1/1/2/7]"
        icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
        title="Realized Volatility"
        description="Surge Tracks Realized Volatility Using Historical On-Chain Data To Give You A Clear."
        background="bg-gradient-to-l from-[#034F47]/30 to-black"
        image="/1st image.png"
        imageSize="full-height"
      />

      <GridItem
        area="md:[grid-area:1/7/2/11]"
        icon={<Hexagon className="h-5 w-5 text-emerald-400" />}
        title="OnChain Oracle"
        description="Trustless, real-time data feeds for pricing and execution."
        background="bg-gradient-to-r from-[#034F47]/30 to-black"
        image="/2nd image.png"
        imageSize="full-height"
      />

      <GridItem
        area="md:[grid-area:2/1/3/5]"
        icon={<ArrowRightLeft className="h-5 w-5 text-emerald-400" />}
        title="Surge Tokens"
        description="Tokenized volatility exposure — liquid and tradable."
        background="bg-gradient-to-l from-[#034F47]/30 to-black"
        image="/3rd image.png"
        imageSize="full-height"
      />

      <GridItem
        area="md:[grid-area:2/5/3/11]"
        icon={
          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">15</span>
          </div>
        }
        title="Token Swap"
        description="We let you enter financial contracts, you can speculate on — or hedge against volatility itself."
        background="bg-gradient-to-r from-[#034F47]/30 to-black"
        image="/4th image.png"
        imageSize="full-height"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  background?: string;
  image?: string;
  imageSize?: "default" | "full-height";
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  background,
  image,
  imageSize = "default",
}: GridItemProps) => {
  return (
    <li className={`h-[16rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-1 md:rounded-3xl md:p-1.5">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className={`border-0.75 relative flex h-full ${
            image ? "flex-row" : "flex-col"
          } justify-between gap-2 overflow-hidden rounded-xl p-3 md:p-3 ${
            background || "bg-gradient-to-r from-[#034F47]/0 to-black"
          } dark:shadow-[0px_0px_27px_0px_#2D2D2D]`}
        >
          {image && (
            <div
              className={`flex-shrink-0 ${
                imageSize === "full-height"
                  ? "w-auto max-w-[70%] h-full"
                  : "w-auto max-w-[40%]"
              }`}
            >
              <img
                src={image}
                alt={title}
                className={`w-full rounded-lg ${
                  imageSize === "full-height"
                    ? "h-full object-cover"
                    : "h-auto object-contain"
                }`}
              />
            </div>
          )}
          <div
            className={`relative flex flex-1 flex-col justify-between gap-1 ${
              imageSize === "full-height" ? "min-w-0" : ""
            }`}
          >
            {!image && (
              <div className="w-fit rounded-lg border border-gray-600 p-1">
                {icon}
              </div>
            )}
            <div className="space-y-6">
              <h3
                className={`-tracking-4 pt-0.5 font-sans font-semibold text-balance text-teal-400 ${
                  imageSize === "full-height"
                    ? "text-lg/[1.25rem] md:text-4xl/[1.5rem]"
                    : "text-2xl/[1.5rem] md:text-3xl/[2rem]"
                } dark:text-teal-400`}
              >
                {title}
              </h3>
              <h2
                className={`font-sans text-white leading-[3.5] max-w-[280px] break-words whitespace-normal [&_b]:md:font-semibold [&_strong]:md:font-semibold ${
                  imageSize === "full-height"
                    ? "text-base md:text-lg"
                    : "text-lg md:text-xl"
                }`}
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
