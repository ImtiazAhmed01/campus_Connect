"use client";
import { useState } from "react";

export default function MyCollege() {
  const [rating, setRating] = useState(3);
  return (
    <div className="px-4 md:px-10 lg:px-40 py-5 flex justify-center">
      <div className="max-w-[960px] w-full">
        {/* Header Section */}
        <div className="flex flex-col pt-6 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My College Journey
          </h1>
          <div className="hidden md:block w-36 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* College Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8 transition-all duration-300 hover:shadow-lg">
          <div className="p-6 flex flex-col sm:flex-row gap-6">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACb3O71CSya7XGOwMNCBxgqoQmtMyf8wqmE0o5bpjBZ1CSabP-RIRn9CtPX0PBt-su0NPZbJfyPlKWpioYcsfBAEzICvNPo2JKckmE_N7UI3DCSJnBQ5vPKCQK0JNe2RORMVA8JLynkfP6-E9_AOcDwie_BRLWbdcutdfTYro4sSEXKuNjk6ronEerB2R_cXmKdNKrSlfOFpen7213sD-u0Ltx2br11u_ODKskSvX7SRnKjd69UVekljdMSn07-VGvRZmX4G0NldI"
                alt="University Campus"
                className="w-32 h-32 rounded-lg object-cover border-4 border-white dark:border-gray-700 shadow-sm"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                ★ 4.8
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                University of Metropolitan City
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Public university in Metropolitan City
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full">
                  Established: 1890
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs rounded-full">
                  15,000 Students
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs rounded-full">
                  Ranked #25 Nationally
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="mr-2">🎓</span> Admission Details
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            {[
              { label: "Application ID", value: "APP2023-12345" },
              { label: "Status", value: "Accepted" },
              { label: "Program", value: "BSc in Computer Science" },
              { label: "Submitted On", value: "August 15, 2023" },
              { label: "Decision Date", value: "October 2, 2023" },
              { label: "Scholarship", value: "Dean's Excellence Award" },
            ].map((item, index) => {
              // Set text color based on status value using a lookup object
              const statusColors = {
                Accepted: "text-green-600 dark:text-green-400 font-semibold",
                Rejected: "text-red-600 dark:text-red-400 font-semibold",
              };

              const isStatus = item.label === "Status";
              const valueClass = isStatus
                ? statusColors[item.value] ||
                  "text-gray-500 dark:text-gray-400 font-medium"
                : "text-gray-800 dark:text-gray-200";

              return (
                <div
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-1/4 text-gray-500 dark:text-gray-400 font-medium">
                    {item.label}
                  </div>
                  <div className={`w-full sm:w-3/4 ${valueClass}`}>
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="mr-2">✍️</span> Share Your Experience
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <textarea
              placeholder="What was your experience like at this university? Share your thoughts on academics, campus life, faculty, and more..."
              className="w-full min-h-[150px] p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
            ></textarea>

            <div className="mb-6 mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Overall Rating
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {rating} star{rating !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-3xl focus:outline-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} ${star === 1 ? "star" : "stars"}`}
                  >
                    {star <= rating ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-600">
                        ★
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md">
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* Campus Life Preview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white px-4 mb-4 flex items-center">
            <span className="mr-2">🏛️</span> Campus Life
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=300",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300",
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300",
            ].map((img, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={img}
                  alt="Campus life"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
