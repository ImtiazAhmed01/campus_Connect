'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar({ open, setOpen }) {
  const pathname = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48a16,16,0,0,1,21.53,0l80,75.48A16,16,0,0,1,224,115.55Z" />
        </svg>
      ),
    },
    {
      label: 'Colleges',
      href: '/dashboard/colleges',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48Z" />
        </svg>
      ),
    },
    {
      label: 'Users',
      href: '/dashboard/users',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Z" />
        </svg>
      ),
    },
    {
      label: 'Reviews',
      href: '/dashboard/reviews',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm md:w-64 w-full h-full border-r">
      <div className="p-4">
        <div className='flex justify-between items-center mb-6'>
          <h2 className="text-gray-900 dark:text-white text-base font-medium hidden md:block">
            Admin Panel
          </h2>
          <Link href={'/'}>
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
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          {links.map(({ label, href, icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-full ${isActive
                  ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 font-medium'
                  : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                <span className="text-gray-700 dark:text-gray-300">{icon}</span>
                <p className="text-sm">{label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
