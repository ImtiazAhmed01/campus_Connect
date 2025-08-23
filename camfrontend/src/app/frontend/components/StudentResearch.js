"use client";
import { useEffect, useState } from "react";

export default function ResearchTab() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/research-papers`)
      .then(res => res.json())
      .then(data => setPublications(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold mb-4">Student Research</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {publications.map((pub) => (
          <a
            key={pub._id}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-[#dbe0e6] dark:border-gray-800 hover:bg-white dark:bg-gray-900 p-4 items-start bg-[#f0f2f5] dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
              </svg>
              <h2 className="text-[#111418] dark:text-white text-base font-bold">
                {pub.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Authors:</strong> {pub.authors.join(", ")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>College:</strong> {pub.college}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
