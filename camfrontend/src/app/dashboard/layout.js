'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-auto relative">
      {/* Sidebar */}
      <aside
        className={`
          fixed z-40 top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center px-4 py-3 border-b bg-white dark:bg-gray-800">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 dark:text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
          <h1 className="text-gray-800 dark:text-white font-semibold ml-2">Admin Panel</h1>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
}
