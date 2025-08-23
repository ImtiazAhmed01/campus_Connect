export default function ResearchTab() {
  // Publications data
  const publications = [
    {
      title: "Advancements in Renewable Energy",
      authors: "Dr. Emily Carter, Dr. David Lee",
      date: "2023-08-15",
      summary: "This paper explores the latest developments in renewable energy technologies."
    },
    {
      title: "The Impact of AI on Healthcare",
      authors: "Dr. Robert Clark, Dr. Sarah Jones",
      date: "2023-07-20",
      summary: "An analysis of how artificial intelligence is transforming healthcare practices."
    },
    {
      title: "Sustainable Urban Development",
      authors: "Dr. Michael Brown, Dr. Olivia Green",
      date: "2023-06-25",
      summary: "A study on sustainable practices for urban development and planning."
    },
    {
      title: "Innovations in Material Science",
      authors: "Dr. Jessica White, Dr. Thomas Black",
      date: "2023-05-30",
      summary: "This research highlights new materials and their potential applications."
    },
    {
      title: "The Future of Space Exploration",
      authors: "Dr. Daniel Harris, Dr. Laura Adams",
      date: "2023-04-10",
      summary: "A look at upcoming missions and technologies in space exploration."
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Climate Change Mitigation Strategies",
      investigator: "Dr. Emily Carter",
      department: "Environmental Science",
      status: "Active"
    },
    {
      title: "AI in Medical Diagnostics",
      investigator: "Dr. Robert Clark",
      department: "Computer Science",
      status: "Active"
    },
    {
      title: "Urban Sustainability Initiatives",
      investigator: "Dr. Michael Brown",
      department: "Urban Planning",
      status: "Active"
    },
    {
      title: "Advanced Materials Research",
      investigator: "Dr. Jessica White",
      department: "Material Science",
      status: "Active"
    },
    {
      title: "Robotics for Space Exploration",
      investigator: "Dr. Daniel Harris",
      department: "Aerospace Engineering",
      status: "Active"
    }
  ];

  // Research centers data
  const researchCenters = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
          <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"/>
        </svg>
      ),
      name: "Environmental Science Center",
      description: "Focuses on environmental sustainability and climate change."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
          <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"/>
        </svg>
      ),
      name: "Biomedical Research Institute",
      description: "Conducts research in biomedical sciences and healthcare."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
          <path d="M237.79,53.23a66.86,66.86,0,0,0-97.74,0,72.21,72.21,0,0,0-12.05,17,72.21,72.21,0,0,0-12-17,66.86,66.86,0,0,0-97.74,0,8,8,0,0,0,2.6,12.85L77,90.55a71.42,71.42,0,0,0-43.36,33.21,70.64,70.64,0,0,0-7.2,54.32A8,8,0,0,0,39,182.36l81-61.68V224a8,8,0,0,0,16,0V120.68l81,61.68a8,8,0,0,0,12.57-4.28,70.64,70.64,0,0,0-7.2-54.32A71.42,71.42,0,0,0,179,90.55l56.22-24.47a8,8,0,0,0,2.6-12.85ZM67.08,48a51.13,51.13,0,0,1,37.28,16.26,56.53,56.53,0,0,1,14.26,26.93L39,56.53A50.5,50.5,0,0,1,67.08,48ZM40,161.5a54.82,54.82,0,0,1,7.47-29.7,55.55,55.55,0,0,1,34-25.89A56.52,56.52,0,0,1,96.1,104a55.82,55.82,0,0,1,16.23,2.41ZM208.5,131.8A54.82,54.82,0,0,1,216,161.5l-72.3-55.1a56.3,56.3,0,0,1,64.83,25.4ZM137.38,91.19a56.53,56.53,0,0,1,14.26-26.93A51.13,51.13,0,0,1,188.92,48,50.5,50.5,0,0,1,217,56.53Z"/>
        </svg>
      ),
      name: "Urban Planning and Sustainability Department",
      description: "Dedicated to sustainable urban development and planning."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
          <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"/>
        </svg>
      ),
      name: "Robotics and AI Lab",
      description: "Develops advanced robotics and AI technologies."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
          <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16a76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"/>
        </svg>
      ),
      name: "Aerospace Engineering Department",
      description: "Specializes in aerospace engineering and space exploration."
    }
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Research at Our University</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>

      {/* Recent Publications */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Publications</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Authors
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Publication Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Summary
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {publications.map((pub, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {pub.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {pub.authors}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {pub.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {pub.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ongoing Projects</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Project Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Principal Investigator
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {project.investigator}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {project.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Research Centers and Departments */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Research Centers and Departments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchCenters.map((center, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                  {center.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{center.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{center.description}</p>
              <button className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}