"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Overview() {
  const { id } = useParams(); // Get college ID from the route
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges/${id}`);
        if (!res.ok) throw new Error("Failed to fetch college");
        const data = await res.json();
        setCollege(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCollege();
  }, [id]);

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <div className="py-8">
      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About {college.name}
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {college.name} is located in {college.location} and was established
          in {college.established}. It has around {college.students} students
          and offers a variety of academic programs to foster innovation,
          research, and community engagement.
        </p>
      </section>

      {/* Academic Programs */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Academic Programs
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Our programs are designed to equip students with the skills and
          knowledge required for their professional careers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {college.programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {program}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprehensive study and research opportunities in {program}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
