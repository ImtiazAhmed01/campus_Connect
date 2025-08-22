import React from "react";

export default function SportsTab() {
  const sportsTeams = [
    {
      name: "Basketball",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBuFrqY_qPMFumWlkovGtq1ie_lTTTxb9POcofmMNmPEPXD8N9TtKQcpi7u-B7tpW7upg7EVC3IQz_YOXmg7lZU8lCQrOr_lINwpwQMPSKClnJmZTDyMtg0rX76qwcoUdzjhniYb2PqplnpaRx4nfEiTEDQ0H-G-LQnrUBdo88X-thurWDGUdT5QrhhEvNSTYR63B_yajyMZCAfhEBL1zY2SbX8yA-xlNDPAHImA06u_RFaAlAk5pivPSlO073z-5UYnNJj8jl14t8",
    },
    {
      name: "Soccer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCw6zbiiicdMajLrjES6-R5q3s_EHnqGgBAS6GHeSxm9_SxTL6oYajB6AeAKsMtQtiw9xYaMHAGfjmeOUR5Y8KF6rUV5frzTP_Es1ujjK9zklH8yXmbjc8u-D67Ks5rrkqDF3Z6H_QwzT_j0xu0aaN9yke7aA-VQjckQOYWDnnOH4aHk3UzJpU4jRpLaPGe643LzBS1RwVirKNXbzCkbk_TqKB61TW2wnD-AhvtYHm-w5WY3htGof6PtU67ZPt3ypZGr0tC2BR5BW4",
    },
    {
      name: "Baseball",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAqsWGJWQoou49yBiqR48Ssa0mmuhy6RmPInWUrVLQD17pzMws8M12fbPgtc1YEQusGlf8YLt62RCCo_4zw79acaVLrrGigp42JZurwAxdYlbTrlMXOC9zjFL6Y5QQraHDrBvfEMT3PxtD5D5kVRl8x1lwawz4c2qPIOyM0mRN-OdAlMxLz4u9_o_TnFQQbLzqxUGp5CW2y6QOEGGbJFzCxII1ZcsULvOuskdpOH5UzSY9-wadaHJI4pxzHNPN0V9uVTFGKLP2x03U",
    },
    {
      name: "Volleyball",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDClHI9pQFn5sKapRllHuFnHimFV-ngmud0Tc42BNxJMOCZbWAN6E2sHuXi2Sze8DbmHXjY12aFPjq34_MezyD3eC3w062vga3R9afLLlKvE-ht0NvQAS5LUXcRAMZmcPad5u9cFU3e4Gmvo1fq_y3iTNnDivTlTskTUHhWrJ9ui5Je2r_lKbqT-kchTf3OgfP1eFcSBSb9BzKNJ92qcjWXv2qRNfuikiT6TwNf1zLD__9-7uDIPAJ3EDVf1fOzwL3Xt3DJzVNgAU4",
    },
  ];

  const facilities = [
    {
      name: "Basketball Court",
      description:
        "State-of-the-art basketball court with seating for 2,000 spectators.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXkIuZEl8hICpID_6vzistMLdqUpjS_cUpnkoKWtK60ZPrO_w_iWfCd3uX1PI7BCVoxiXmv9MBm7ENlIYXWnwuowmGlGydJgb3bQXZhHkPVeoiAaUZvRUMKvnrrhOB6pdWVoJUk4xhMIib5SCd7uT9T4qonA5PYdXiiMUm65YSRGh5bKMjz-W4de7GEkUahXJryjZ_BX6Li1kOEueu7TOPnFmfGsrkyav48QAtJg23-daR9tIrHwNWTHKisKRpFYH5SsfmqVADfs",
    },
    {
      name: "Soccer Field",
      description: "Well-maintained soccer field with professional-grade turf.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IM-mm7p1REmeFJ5ryb3LDN4QKtEzryLE5CwPn9O2YuQYgqOqpriS2dGsTkaf6wVfjUHigT70y5G3w56FrvulDhIuYxggY4kwaDunZU5LulBdAkVCoJXVDp1297q2I-P29x2TpB6zZyYKB03AWXMKE6osG7UzcJ9lvBsyZn7dVytV3xBQtIZHv8zs3b7MEmA9kW_KA_24TkBkYj1h6l4vX80GcKALWPISVBXpPRcu5CCRnUVhfUQTuL2-pnBQX9D0pYv4aOt2gyA",
    },
    {
      name: "Baseball Diamond",
      description:
        "Professional baseball diamond with covered dugouts and spectator seating.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAjEIrC9uGbe0V0RciiqbgORqA1CiP3GfB0UnCl8vWqD4l1sexorrRLZPmGz-sp3OxCs3MDSV83zzAXOXI0OdXIyxCadHqPhOLZHfFqWYThCDSaGJlsTNeVuCFx0rUUVOx-g1o7zUNfUlyRsfz_jUjj3RBB62e0SP1f_IY806AOTdO7eFbyLrpvBmnhRN4i_p7q5ayvBZWeJkl8V6dvnzuSqteiVE2qzDEadrWcx3nmO_sB2AKKsZEHRZDNLjEIg91CDXiyaXUSXlU",
    },
    {
      name: "Volleyball Court",
      description:
        "Indoor volleyball court with high-quality flooring and equipment.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDm_7PwPrKW7rusPIwRUf8iblX8842u7ZHRmHnD03FgDN3tbRJU4uLoVihQsluGDDjtTSL3SMpdPA1pGLb716P6jYaQiZPyTCnaqHzyJtDbqltQI4V4_iVCu8YzLjRxTGWVxwssaasdA8oq_swpanCFGQC0_Eu294rVBEFVGxbmtoq85vNa3NqpRIhejnaoofDbOD6iZSEl-GatSXruYptPtp7e8WTxVZC8tA7suoR7tJRiuv5htkvKsY0iCD14b9N21C4eUcU0NDE",
    },
  ];

  const achievements = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
        </svg>
      ),
      title: "National Basketball Championship",
      year: "2022",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"></path>
        </svg>
      ),
      title: "Regional Soccer Tournament",
      year: "2023",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
        </svg>
      ),
      title: "Conference Baseball Title",
      year: "2024",
    },
  ];

  const newsUpdates = [
    {
      category: "Latest News",
      title: "Basketball Team Advances to Finals",
      description:
        "The men's basketball team secured a spot in the national championship finals after a thrilling victory over their rivals.",
      image: "",
    },
    {
      category: "Upcoming Event",
      title: "Soccer Team Home Game",
      description:
        "Don't miss the soccer team's home game this Saturday at 2 PM. Support our athletes!",
      image: "",
    },
  ];

  return (
    <div className="pb-2">
      {/* Athletics Section */}
      <div className="flex flex-wrap justify-between gap-3 pb-4 w-full">
        <div className="flex w-full md:min-w-[288px] flex-col gap-">
          <p className="text-[#121516] dark:text-white tracking-light text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight">
            Athletics
          </p>
          <p className="text-[#6a7681] dark:text-gray-300 text-sm sm:text-base font-normal leading-normal">
            Explore the vibrant sports culture at our college, featuring a wide
            range of teams, facilities, and achievements.
          </p>
        </div>
      </div>

      {/* Sports Teams */}
      <h2 className="text-[#121516] dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Sports Teams
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 py-4">
        {sportsTeams.map((sport) => (
          <div key={sport.name} className="flex flex-col gap-4 rounded-lg">
            <div className="">
              <img
                src={sport.image}
                className="object-center h-36 w-full rounded-xl"
                alt={sport.name}
                loading="lazy"
              />
            </div>
            <p className="text-[#121516] dark:text-white text-base font-medium leading-normal">
              {sport.name}
            </p>
          </div>
        ))}
      </div>

      {/* Facilities */}
      <h2 className="text-[#121516] dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em]pb-3 pt-5">
        Facilities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 py-4 w-full">
        {facilities.map((facility) => (
          <div key={facility.name} className="flex flex-col gap-3 pb-3 w-full">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative">
              <img
                src={facility.image}
                className="object-cover h-36 w-full rounded-xl"
                alt={facility.name}
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-[#121516] dark:text-white text-base font-medium leading-normal">
                {facility.name}
              </p>
              <p className="text-[#6a7681] dark:text-gray-300 text-sm font-normal leading-normal">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <h2 className="text-[#121516] dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Achievements
      </h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 w-full">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-[#121516] dark:text-white">
                {achievement.icon}
              </div>
              <div className="w-[1.5px] bg-[#dde1e3] dark:bg-gray-600 h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#121516] dark:text-white text-base font-medium leading-normal">
                {achievement.title}
              </p>
              <p className="text-[#6a7681] dark:text-gray-300 text-base font-normal leading-normal">
                {achievement.year}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* News & Updates */}
      <h2 className="text-[#121516] dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        News & Updates
      </h2>
      {newsUpdates.map((news, index) => (
        <div key={index} className="pt-4 w-full">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm w-full">
            <div className="flex flex-col gap-1 w-full md:flex-[2_2_0px]">
              <p className="text-[#6a7681] dark:text-gray-300 text-sm font-normal leading-normal">
                {news.category}
              </p>
              <p className="text-[#121516] dark:text-white text-base font-bold leading-tight">
                {news.title}
              </p>
              <p className="text-[#6a7681] dark:text-gray-300 text-sm font-normal leading-normal">
                {news.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
