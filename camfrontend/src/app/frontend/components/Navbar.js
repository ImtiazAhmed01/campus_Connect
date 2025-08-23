"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800 lg:px-10">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo + Mobile Toggle + Mobile Avatar */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-0 text-[#111418] dark:text-white drop-shadow-2xl">
                <div className="size-5 -mt-1">
                  <svg
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  CampusConnect
                </h2>
              </div>
            </Link>

            {/* Mobile Menu Button + Avatar */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>

              {/* Mobile Avatar */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center focus:outline-none"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <Image
                      src="https://merakiui.com/images/full-logo.svg"
                      alt="avatar"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/80 dark:bg-gradient-to-b dark:from-blue-950 dark:to-gray-800 border border-gray-200 dark:border-gray-500 rounded shadow-lg z-10">
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-300">
                      <Link href="/frontend/profile">Khatab wedaa</Link>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setShowDropdown(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-950"
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Links + Desktop Icons */}
          <div
            className={`${isOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:space-x-0 mt-4 lg:mt-0 transition-all duration-300`}
          >
            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row lg:items-center">
              <Link
                href="/frontend"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/frontend/colleges"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Colleges
              </Link>
              <Link
                href="/frontend/admission"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Admission
              </Link>
              <Link
                href="/frontend/my-college"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                My College
              </Link>
            </div>

            {/* Desktop Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-4 ml-6">
              {/* Notification Bell */}
              <button
                className="text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none"
                aria-label="Notifications"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Desktop Avatar */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center focus:outline-none"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <Image
                      src="https://merakiui.com/images/full-logo.svg"
                      alt="avatar"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/80 dark:bg-gradient-to-b dark:from-blue-950 dark:to-gray-800 border border-gray-200 dark:border-gray-500 rounded shadow-lg z-10">
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-300">
                      <Link href="/frontend/profile">My Profile</Link>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setShowDropdown(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-950"
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
