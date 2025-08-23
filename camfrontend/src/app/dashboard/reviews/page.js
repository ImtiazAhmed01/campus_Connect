"use client"
import React, { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: {
        name: 'Sophia Clark',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZj0fivRIQZ2gUHHCJwSIm5NObJn2qHTh31cf8Wuqd1mYgAuBezcOi5G-4_JGxeqrNvIlFPKwXFP7TjbT0Z4hN7kR5EtWz7T0BlsH2ebpK686wljp89i-HmWQhCuKhv-XuTCEEDWIgTs1VThiZDu1hbj0lCAesJ-eSwf9Fl6BGqnQtUitVj53a8zszOGt6ZOQVv99b5R3Jpg00aoyQrdGAWW8XQNpi9xMFtAt6McflahjySO8VgdA7d8OcGlRtM7Zj_ceTblTCmbk',
      },
      date: '2024-07-20',
      rating: 5,
      content: 'The career counseling service at State University is excellent. The counselors are knowledgeable and provided valuable advice that helped me secure an internship.',
      likes: 12,
      dislikes: 2,
      college: 'State University'
    },
    {
      id: 2,
      user: {
        name: 'Ethan Miller',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcA7sHUh9lzs88dPblXx4FO8fP3zyndhZOKH_3yfypnZ-CG30bzNDFMX0LS54SLUhxUNjRKVfbJblSuriNp3I9s9B3rPhFQ0t7bRr885RLhqdFHgV1iSHzqSeBhL-pbqxiTOWkseECvwKCUpCYIBcsGA8wFpKp6x64R6CtAyEdUm4J_5wI6tNRUue2vPw1psgEF_4Rw9HecoQ7THqK7iiyIvOzcdRo4ZikCf9pmT_BLK5Obyifj5CES3A2RrDPMGaemWdX2TXN8pg',
      },
      date: '2024-07-15',
      rating: 4,
      content: 'The library at City College is well-equipped and offers a great study environment. However, it can get crowded during peak hours.',
      likes: 8,
      dislikes: 1,
      college: 'City College'
    },
    {
      id: 3,
      user: {
        name: 'Olivia Davis',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgkXK8Cu6GnemXDNNcYzuuKkG2JvN2dnCpY-pg6T8OPqjliO91KMQ9K_1to_yTYbzMx4-BV-w6206P0kXGSaaMUzRU8c7TE3h05B7-BfOeBtsQdC9ZHQZkuQLKOVqacj64g5uxZCVw-RBWz3GaWSJKgMXI0LHeJavWfH5Uwz7CvJUTMxHN2yRQBTxES797NlIy5059dVz77ulfuLoGGCNP0AHij5PzBRA445j-WcU56VTMRsYzwU3GmSbAkvdONnOIr6PzBReO1Po',
      },
      date: '2024-07-10',
      rating: 3,
      content: 'The tutoring service for math at Community College was average. The tutor was helpful but lacked in-depth knowledge of the subject.',
      likes: 5,
      dislikes: 3,
      college: 'Community College'
    }
  ]);

  const [filters, setFilters] = useState({
    college: 'All Colleges',
    rating: 'All Ratings',
    date: 'Newest First'
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleLike = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  const handleDislike = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, dislikes: review.dislikes + 1 } : review
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Main Content */}
      <main className="px-4 py-6 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Reviews</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Read reviews from other students about various college services.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white text-sm font-medium">
              {filters.college}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white text-sm font-medium">
              {filters.rating}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white text-sm font-medium">
              {filters.date}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-10 h-10 rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${review.user.avatar})` }}
                />
                <div>
                  <h3 className="text-gray-900 dark:text-white font-medium">{review.user.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{review.date} • {review.college}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{review.content}</p>
              
              <div className="flex gap-6 text-gray-500 dark:text-gray-400">
                <button 
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => handleLike(review.id)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                  </svg>
                  <span>{review.likes}</span>
                </button>
                <button 
                  className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400"
                  onClick={() => handleDislike(review.id)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                  </svg>
                  <span>{review.dislikes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">2</button>
            <button className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">3</button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
}