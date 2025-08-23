"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AdmissionTab from "../components/AdmissionTab";
import Events from "../components/Events";
import ResearchTab from "../components/ResearchTab";
import SportsTab from "../components/SportsTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Overview from "../components/Overview";

export default function CollegeDetails() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = ["Overview", "Admissions", "Events", "Research", "Sports"];

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges/${id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setCollege(data);
      } catch (error) {
        console.error("Error fetching college:", error);
      } finally {
        setLoading(false);
      }
    };


    if (id) fetchCollege();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!college) return <p className="text-center">College not found</p>;

  return (
    <div className="px-4 md:px-8 lg:px-40 py-5 bg-white dark:bg-gray-900">
      {/* College Header */}
      <div className="mb-6 mt-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome To {college.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {college.description}
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%), url(${college.image})`,
          }}
        />
      </div>

      {/* Navigation Tabs */}
      <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <TabList className="flex md:space-x-8 space-x-3">
            {tabs.map((tab, i) => (
              <Tab
                key={tab}
                className={`pb-3 px-1 border-b-2 cursor-pointer outline-none ${selectedIndex === i
                  ? "border-blue-600 text-blue-600 dark:text-blue-400 font-bold"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>

        <TabPanel><Overview /></TabPanel>
        <TabPanel><AdmissionTab /></TabPanel>
        <TabPanel><Events /></TabPanel>
        <TabPanel><ResearchTab /></TabPanel>
        <TabPanel><SportsTab /></TabPanel>
      </Tabs>
    </div>
  );
}
