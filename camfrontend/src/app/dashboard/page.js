import React from 'react';

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Main Content */}
      <main className="px-4 py-6 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Overview</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-200">
            <p className="text-gray-900 dark:text-gray-200 text-base font-medium mb-2">Total Colleges</p>
            <p className="text-gray-900 dark:text-white text-2xl font-bold">150</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-200">
            <p className="text-gray-900 dark:text-gray-200 text-base font-medium mb-2">Total Users</p>
            <p className="text-gray-900 dark:text-white text-2xl font-bold">5,000</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-200">
            <p className="text-gray-900 dark:text-gray-200 text-base font-medium mb-2">Average Reviews</p>
            <p className="text-gray-900 dark:text-white text-2xl font-bold">4.5</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>

          <div className="space-y-6">
            {/* Activity Item 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </div>
                <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full"></div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">New user registered</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2 hours ago</p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </div>
                <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full"></div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">College profile updated</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">4 hours ago</p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded-full text-yellow-600 dark:text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full"></div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Review submitted</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">1 day ago</p>
              </div>
            </div>

            {/* Activity Item 4 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full"></div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">User account verified</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2 days ago</p>
              </div>
            </div>

            {/* Activity Item 5 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-2 rounded-full text-indigo-600 dark:text-indigo-400">
                  <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">College added</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}