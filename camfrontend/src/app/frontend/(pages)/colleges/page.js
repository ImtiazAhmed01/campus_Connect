

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Colleges() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges`);
        const data = await res.json();
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-3xl font-bold px-2 py-5 text-gray-900 dark:text-white">
        Featured Colleges
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden h-full min-h-[200px]"
          >
            {/* Image */}
            <div
              className="w-full sm:w-1/3 bg-cover bg-center min-h-[160px]"
              style={{ backgroundImage: `url('${college.image}')` }}
            ></div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {college.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {college.add_date}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                {college.description}
              </p>

              {/* <button className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-start">
                <Link href={`/colleges/${college._id}`}>
                  Details
                </Link>
              </button>
            </div> */}
              <Link href={`/colleges/${college._id}`}>
                <button className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-start">Details</button>
              </Link>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



