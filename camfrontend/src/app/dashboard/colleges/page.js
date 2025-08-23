"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState('');
  const [colleges, setColleges] = useState([
    { id: 1, name: 'University of Springfield', location: 'Springfield, IL', students: '15,000', rating: 4.5 },
    { id: 2, name: 'State College of Harmony', location: 'Harmony, CA', students: '12,000', rating: 4.2 },
    { id: 3, name: 'Institute of Innovation', location: 'Techville, TX', students: '18,000', rating: 4.8 },
    { id: 4, name: 'Metropolitan University', location: 'Metro City, NY', students: '20,000', rating: 4.6 },
    { id: 5, name: 'Coastal Community College', location: 'Coastal Town, FL', students: '8,000', rating: 3.9 },
    { id: 6, name: 'Mountain View Academy', location: 'Mountain View, CO', students: '5,000', rating: 3.7 },
    { id: 7, name: 'Lakeside Technical Institute', location: 'Lakeside, MI', students: '10,000', rating: 4.5 },
    { id: 8, name: 'Riverdale Arts College', location: 'Riverdale, GA', students: '7,000', rating: 4.2 },
    { id: 9, name: 'Greenfield Agricultural University', location: 'Greenfield, IA', students: '6,000' },
    { id: 10, name: 'Central Business School', location: 'Central City, OH', students: '14,000', rating: 4.6 },
  ]);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAction = (collegeId, action) => {
    if (action === 'delete') {
      setColleges(colleges.filter(college => college.id !== collegeId));
    } else if (action === 'toggle-status') {
      setColleges(colleges.map(college =>
        college.id === collegeId
          ? { ...college, status: college.status === 'Active' ? 'Inactive' : 'Active' }
          : college
      ));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 w-full">
      {/* Main Content - Matching Users component structure */}
      <main className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
          <Link href={'/dashboard/add-college'} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
            Add College
          </Link>
        </div>

        {/* Search - Matching Users component */}
        <div className="mb-6">
          <div className="relative md:w-full xs:w-2/5 w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search colleges"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Colleges Table - Matching Users component style */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">College Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredColleges.map((college) => (
                <tr key={college.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{college.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{college.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{college.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {college.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAction(college.id)}
                        className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleAction(college.id, 'delete')}
                        className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}