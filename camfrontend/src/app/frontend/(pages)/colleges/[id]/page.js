"use client";
import { useState } from "react";
import AdmissionTab from "../components/AdmissionTab";
import Events from "../components/Events";


import ResearchTab from "../components/ResearchTab";
import SportsTab from "../components/SportsTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Overview from "../components/Overview";

export default function CollegeDetails({ params }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = ["Overview", "Admissions", "Events", "Research", "Sports"];
  const { id } = params;

  // Example inline college data
  const colleges = {
    1: {
      name: "University of Metropolita",
      description:
        "A leading institution in the heart of the city, known for its innovative programs and diverse student body.",
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHcCSOGBLQtp8pYSRrA39Ki6FiBhZRrgGI-5h5twim1J1Mi7zjzDH89p84bn1mQw1t177CMxJsBtlYMOA2q_HjSX3uEw9DBIZR7y0I7m1SlFBDQtjVbAUAPAkdeudCSkGGlBoFREacH3mqu06Iy1YUUjTpZzjSeQ813qeYRLoc-HBpiQtUNUGqplJKR8_RSh9Ck0mlOXredBBhCW2-2Q7rnfprssDDiB68aX3zaXF8qfgCFdPFrnsddejRk2Onkky77WRHQl8PnHg",
    },
  };
  const college = colleges[id];

  if (!college) {
    return <p>Loading or College not found...</p>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-40 py-5 bg-white dark:bg-gray-900">
      <div className="">
        {/* College Header */}
        <div className="mb-6 mt-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome To University of Metropolitan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A leading institution in the heart of the city, known for its
            innovative programs and diverse student body.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCHcCSOGBLQtp8pYSRrA39Ki6FiBhZRrgGI-5h5twim1J1Mi7zjzDH89p84bn1mQw1t177CMxJsBtlYMOA2q_HjSX3uEw9DBIZR7y0I7m1SlFBDQtjVbAUAPAkdeudCSkGGlBoFREacH3mqu06Iy1YUUjTpZzjSeQ813qeYRLoc-HBpiQtUNUGqplJKR8_RSh9Ck0mlOXredBBhCW2-2Q7rnfprssDDiB68aX3zaXF8qfgCFdPFrnsddejRk2Onkky77WRHQl8PnHg)",
            }}
          >
            {/* Image dots slider indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {[true, false, false, false, false].map((active, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${active ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          {/* Custom Styled TabList */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <TabList className="flex md:space-x-8 space-x-3">
              {tabs.map((tab, i) => (
                <Tab
                  key={tab}
                  className={`pb-3 px-1 border-b-2 cursor-pointer outline-none ${selectedIndex === i
                      ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel>
            <AdmissionTab />
          </TabPanel>
          <TabPanel>
            <Events />
          </TabPanel>
          <TabPanel>
            <ResearchTab />
          </TabPanel>
          <TabPanel>
            <SportsTab />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
