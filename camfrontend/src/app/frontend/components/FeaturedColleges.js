// const colleges = [
//   {
//     name: "University of Innovation",
//     add_date: "Admission Dates: Fall 2024",
//     description:
//       "Events: Career Fair, Alumni Meet, Research Highlights: Nanotechnology, Renewable Energy, Sports Facilities: Football Stadium, Basketball Arena",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4lDKPkr3fYkZkVHBIQe7jgQJ-7IX5775laJ1nHHkgMV_2alQI9WplEqbxG8NIpGTX3jImtgEvQ8nIQUSC8bm4ovmhSFwHNYVjcnZA8gWZ4_O6eDr7OR9QStv-aEVadGrmGNdK4TNx2K2YW828uYxbFh-YpCv4i4MbLfjvA8Difqp1ZiOxXY4KJiZVqa5Fl3uOlnvIJaa339vd5GZfUfl0oogpSEJewRTdkeZnx_NImuY-jkVPcMfNU9K4me3BwKEfjo6OGSYkPQ",
//   },
//   {
//     name: "Metropolitan College",
//     add_date: "Admission Dates: Spring 2025",
//     description:
//       "Events: Tech Conference, Innovation Summit, Research Highlights: Artificial Intelligence, Cybersecurity, Sports Facilities: Swimming Pool, Tennis Courts",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTLRpy_LQSw4TiJwfu4pNDb1qzaIcsnUXmivOL5Z-7RD0UwwMjD5k7TeClLrMM6X5450JDlSwhbS4C1r9HrzGHxwUYYXGmmIoevGoc5FMQzXyUFz9g2unIAoQu9bdjA0QneTaTPdCVHq8Quo67FbMlgj1y5US54LDzQ-XmD_hBdPJffy47EyhHk6u7Ba4bOy9QR1D6BrWi5J9JUHtQqQBeKcDYaTjhQQdgnXYigowIKgpQcht5PmoZfL2cZGjnCrVluQ8PzsujW4",
//   },
//   {
//     name: "Coastal State University",
//     add_date: "Admission Dates: Summer 2024",
//     description:
//       "Events: Environmental Symposium, Marine Biology Workshop, Research Highlights: Oceanography, Climate Change, Sports Facilities: Sailing Club, Beach Volleyball",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAfibHdiTDlGAU5oN3s4hK56kqTdC6YNqJufkaK_4NuqlZdYnno1he3pyqpvTLxFYCzdvoOia4ife28Vo9uVfX2mp0yrFCqGfof2hIjRTZOAI8xr_UrI_NcH0JpazvZcgKTYPvzaMLdXU8LTQ1ofvjUsEEGATMP2eSj50FB_ibcpsESCbsmQKzzVuJfLHre3KaUyOngm31WXFDqJcYeZVrQRKV_SlJ-47pmTKuQ_pygKMFwzyHz9nKyr1EHxf0qejZqLTuw7H_VOK4",
//   },
//   {
//     name: "Silver Oak University",
//     add_date: "Admission Dates: Fall 2024",
//     description:
//       "Events: Tech Innovators Summit, Global Health Conference, Research Highlights: Artificial Intelligence, Data Science, Sports Facilities: Esports Arena, Basketball Court, Rock Climbing Wall",
//     image:
//       "https://tse1.mm.bing.net/th/id/OIP.a_aSXqH1cOCf0K-8ydooowHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
//   },
// ];

// const FeaturedColleges = () => {
//   return (
//     <div className="w-11/12 mx-auto pt-10">
//       <h2 className="text-3xl font-bold px-2 py-5 text-gray-900 dark:text-white">
//         Featured Colleges
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {colleges.map((college, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden h-full min-h-[200px]"
//           >
//             {/* Image - fixed aspect ratio */}
//             <div
//               className="w-full sm:w-1/3 bg-cover bg-center min-h-[160px]"
//               style={{ backgroundImage: `url('${college.image}')` }}
//             ></div>

//             {/* Content - takes remaining space */}
//             <div className="p-4 flex-1 flex flex-col">
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white">
//                 {college.name}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
//                 {college.add_date}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
//                 {college.description}
//               </p>

//               <button className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-start">
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedColleges;
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        // const res = await fetch("process.env.NEXT_PUBLIC_API_URL/colleges");
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges`);

        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

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

export default FeaturedColleges;
