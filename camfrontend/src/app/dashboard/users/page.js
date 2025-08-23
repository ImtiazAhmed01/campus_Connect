"use client";
import React, { useState } from 'react';

export default function Users() {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'Sophia Clark', email: 'sophia.clark@example.com', date: '2023-08-15', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Ethan Bennett', email: 'ethan.bennett@example.com', date: '2023-09-22', role: 'User', status: 'Active' },
        { id: 3, name: 'Olivia Carter', email: 'olivia.carter@example.com', date: '2023-10-05', role: 'User', status: 'Blocked' },
        { id: 4, name: 'Liam Davis', email: 'liam.davis@example.com', date: '2023-11-12', role: 'User', status: 'Active' },
        { id: 5, name: 'Ava Evans', email: 'ava.evans@example.com', date: '2023-12-01', role: 'User', status: 'Active' },
        { id: 6, name: 'Noah Foster', email: 'noah.foster@example.com', date: '2024-01-18', role: 'User', status: 'Active' },
        { id: 7, name: 'Isabella Green', email: 'isabella.green@example.com', date: '2024-02-25', role: 'User', status: 'Blocked' },
        { id: 8, name: 'Jackson Hayes', email: 'jackson.hayes@example.com', date: '2024-03-10', role: 'User', status: 'Active' },
        { id: 9, name: 'Mia Ingram', email: 'mia.ingram@example.com', date: '2024-04-03', role: 'User', status: 'Active' },
    ]);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAction = (userId, action) => {
        setUsers(users.map(user => {
            if (user.id === userId) {
                if (action === 'block') return { ...user, status: 'Blocked' };
                if (action === 'unblock') return { ...user, status: 'Active' };
                if (action === 'delete') return null;
            }
            return user;
        }).filter(Boolean));
        setDropdownOpen(null);
    };

    const toggleDropdown = (userId) => {
        setDropdownOpen(dropdownOpen === userId ? null : userId);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 w-full">
            {/* Main Content */}
            <main className="px-4 py-4 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative md:w-full xs:w-2/5 w-1/3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search users"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Registration Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.role === 'Admin' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                                                'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                                                'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium dropdown-container">
                                        <div className="relative inline-block text-left">
                                            <button
                                                onClick={() => toggleDropdown(user.id)}
                                                className="inline-flex justify-center w-full px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-blue-500"
                                            >
                                                Actions
                                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            {dropdownOpen === user.id && (
                                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                                    <div className="py-1">
                                                        {user.status === 'Active' ? (
                                                            <button
                                                                onClick={() => handleAction(user.id, 'block')}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                Block User
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() => handleAction(user.id, 'unblock')}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                Unblock User
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleAction(user.id, 'delete')}
                                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                        >
                                                            Delete User
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
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