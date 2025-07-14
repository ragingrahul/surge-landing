import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black relative border-t-1 border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto border-x-1 border-[#1F1F1F]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Brand - Left Side (Smaller) */}
          <div className="md:col-span-2 p-6 md:py-16">
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/Group.png" alt="Logo" width={400} height={400} />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Volatility-Native DeFi. Built For Traders, Researchers, And
              Believers In The Unpredictable.
            </p>
          </div>

          {/* Right Side - Contact, Links, Legal (Larger) */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 p-6 md:py-16">
            {/* Contact Us */}
            <div className="md:px-6 ">
              <h4 className="text-white font-semibold mb-4">CONTACT US</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">support@surgify.in</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">+91-98334 98954</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="md:px-6 ">
              <h4 className="text-white font-semibold mb-4">LINKS</h4>
              <div className="space-y-3">
                <Link
                  href="/features"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/how-it-works"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/variance-swap"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  Variance Swap
                </Link>
                <Link
                  href="/volatility-etf"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  Volatility ETF
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className="md:px-6">
              <h4 className="text-white font-semibold mb-4">LEGAL</h4>
              <div className="space-y-3">
                <Link
                  href="/terms"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  Terms Of Service
                </Link>
                <Link
                  href="/privacy"
                  className="block text-gray-400 hover:text-teal-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width border */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-t border-[#1F1F1F]"></div>

        {/* Bottom section with copyright, hashtag, and social links */}
        <div className="py-2 relative">
          <div className="px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-left mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                Copyright © 2025 Surge. All Rights Reserved.
              </p>
            </div>

            <div className="flex">
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Full height vertical separators */}
          <div className="absolute top-0 bottom-0 right-[23px] w-px bg-[#1F1F1F]"></div>
          <div className="absolute top-0 bottom-0 right-[63px] w-px bg-[#1F1F1F]"></div>
          <div className="absolute top-0 bottom-0 right-[103px] w-px bg-[#1F1F1F]"></div>
          <div className="absolute top-0 bottom-0 right-[143px] w-px bg-[#1F1F1F]"></div>
        </div>
      </div>
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-t border-[#1F1F1F]"></div>

      {/* Full-width hashtag section that stretches across the entire page */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-black">
        <h1 className="font-bold text-6xl md:text-[12rem] tracking-tight text-center pt-8">
          <span className="text-teal-400">#</span>
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            SurgeIntoChaos
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
