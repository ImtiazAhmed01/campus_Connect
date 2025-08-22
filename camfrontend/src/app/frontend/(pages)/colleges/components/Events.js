export default function Events() {
  // Event data
  const events = [
    {
      id: 1,
      title: "CampusConnect Open Day",
      description:
        "Join us for our Open Day to explore our campus, meet faculty, and learn about our programs.",
      date: "August 20, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbVFPXCebRFRvra1_8yfhd_N0nZs71m5_LU5AHGXsOyEoD7GIj3LN2HGC1sK10a8HoTevD5bcRhTJRfhOu9RD61G0DMqWtOFiNoTKBad3tm7G6k-QV5GMfiblqiBVW5KIMKb8KWUNNmO7N8ReppWxMn-p14fnvW0GWzyNdq_DRxe62VmwOhLnqT-4ntOG5-TonRndDALLZ2THL5pQ9JOnU4GnbOSMiJw3AEAjb0Wbxspb4hzO3d4yrl0PzfJoRPQi4opztKAuK2Os",
    },
    {
      id: 2,
      title: "Webinar: Application Tips",
      description:
        "Get expert advice on crafting a strong application for CampusConnect.",
      date: "August 25, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIB6_TcwepOQitAWOwZmGk_8Z9xU8y-pf8KVNM94GY3gcP4qjLWpl9mLTot-zF-AE9XNicuDg83qM_VqxvC3obe35KnI7a3ccW85CakZIVtctIurWXBagb4e7D6GMjTRbhrB6ZpE9-u6mzuzbPm7bT_tRLOZSCjPRMwXLBYH_f6O_FxuRFpbFZM8ekv4eXAhw2hUZHU9x0ziS-U_yWScE7d6vTTHJgEQD9IZrerD8ZDHF1u_UlRrkNFX2xsizeCTSFK-7EVCjfPA",
    },
    {
      id: 3,
      title: "Application Workshop",
      description:
        "Attend our workshop to get hands-on help with your application.",
      date: "September 5, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDo1ur_Csufc8G2R2CTDOyVkUHgAj3RJvzZVjbgRdXabNfD5Veox9JoP9JgjQr6OqA0D6Gj6urT0RlAztcTFCs7P1VUnblM_CaBCrnCmw5O-ACqimxrebbe7cL-9j0lDi7KpqhB2lxDKTm9mLiE_VIc6OJAdzBMonUG_nzvCjz9DeWaI0NniXRMKgLWA2btkvgC8aJKk31rNLIgFwCnDYbWMl4tbksPMG1eDRpzYT-47KtRIwJQXbrASx1ClMgpY7MH96ei1MhdrKc",
    },
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          Upcoming Events
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore upcoming events at CampusConnect. Filter by category or date
          to find events that match your interests.
        </p>
      </div>

      {/* Event Details (Alternative View) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          All Upcoming Events
        </h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {event.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {event.date}
                </p>
              </div>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
