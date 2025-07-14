import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-lg px-8 py-4 shadow-2xl">
        <nav className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Group.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* Navigation Links - centered */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/volatility-etf"
              className="text-white hover:text-teal-400 transition-colors text-sm font-medium"
            >
              Analytics
            </Link>
            <Link
              href="/features"
              className="text-white hover:text-teal-400 transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-white hover:text-teal-400 transition-colors text-sm font-medium"
            >
              How it Works
            </Link>
            <Link
              href="https://aptos.swapthesurge.com"
              className="text-white hover:text-teal-400 transition-colors text-sm font-medium"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button / Right Side */}
          <button className="lg:hidden text-gray-300 hover:text-teal-400 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Empty div for desktop to maintain justify-between spacing */}
          <div className="hidden lg:block w-8"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
