/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';

export default function UserProfile() {
  // User data state
  const [user, setUser] = useState({
    name: 'John Cooper',
    email: 'cooper@example.com',
    university: 'BRAC Univesity',
    address: '123 College Ave, Metropolitan City',
    profilePic: 'https://img.freepik.com/free-photo/school-boy-with-book-park_23-2148199240.jpg',
    bio: 'Computer Science student passionate about CyberSecurity and web development'
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  // Save changes
  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated user:', user);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl overflow-hidden">
        {/* Profile Header with Cover Photo */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <div className="absolute -bottom-16 left-6">
            <div className="relative">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
              {isEditing && (
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-4 right-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 rounded-full shadow-md hover:bg-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </button>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 px-6 pb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="md:w-1/3 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full p-3 border-0 bg-white/80 dark:bg-gray-700/80 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
                )}
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={user.bio}
                    onChange={handleChange}
                    className="w-full p-3 border-0 bg-white/80 dark:bg-gray-700/80 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3 space-y-6">
              {/* University */}
              <div className="bg-white/80 dark:bg-gray-700/80 p-5 rounded-xl shadow-sm">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">University</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="university"
                    value={user.university}
                    onChange={handleChange}
                    className="w-full p-3 border-0 bg-white/90 dark:bg-gray-600/90 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-white">{user.university}</p>
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="bg-white/80 dark:bg-gray-700/80 p-5 rounded-xl shadow-sm">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full p-3 border-0 bg-white/90 dark:bg-gray-600/90 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-white break-all sm:break-normal w-0 flex-1">{user.email}</p>
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="bg-white/80 dark:bg-gray-700/80 p-5 rounded-xl shadow-sm">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Address</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="w-full p-3 border-0 bg-white/90 dark:bg-gray-600/90 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    rows="2"
                  />
                ) : (
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-white">{user.address}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}