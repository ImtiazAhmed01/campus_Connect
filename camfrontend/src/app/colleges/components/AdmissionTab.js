export default function AdmissionTab() {
  // Data for process steps
  const admissionProcess = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
        </svg>
      ),
      title: "Review Application Deadlines",
      description:
        "Check the specific deadlines for your desired program. Early application is often recommended.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
        </svg>
      ),
      title: "Prepare Required Documents",
      description:
        "Gather all necessary documents, including transcripts, letters of recommendation, and personal essays.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Z" />
        </svg>
      ),
      title: "Submit Your Application",
      description:
        "Complete the online application form and submit all required documents.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
      ),
      title: "Track Your Application",
      description:
        "Track your application status through the admissions portal and respond to any requests for additional information.",
    },
  ];

  // Data for international requirements
  const internationalRequirements = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Z" />
        </svg>
      ),
      title: "English Language Proficiency",
      description:
        "Provide official scores from TOEFL or IELTS to demonstrate English language proficiency.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" />
        </svg>
      ),
      title: "Visa and Immigration Documents",
      description:
        "Submit copies of your passport and visa, along with any other required immigration documents.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z" />
        </svg>
      ),
      title: "Transcript Evaluation",
      description:
        "Have your transcripts evaluated by an accredited evaluation service to ensure they meet our standards.",
    },
  ];

  // Data for contact information
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
        </svg>
      ),
      title: "Email",
      description: "admissions@campusconnect.edu",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
        </svg>
      ),
      title: "Phone",
      description: "(555) 123-4567",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
        </svg>
      ),
      title: "Office Hours",
      description: "Monday - Friday, 9 AM - 5 PM",
    },
  ];

  // Deadlines data
  const deadlines = [
    { type: "Early Decision", date: "November 1st" },
    { type: "Regular Decision", date: "January 15th" },
  ];
  const graduateDeadlines = [
    { type: "Fall Semester", date: "NMarch 1st" },
    { type: "Spring Semester", date: "October 1st" },
  ];
  const internationalDeadlines = [
    { type: "Undergraduate", date: "January 15th" },
    { type: "Graduate", date: "March 1st" },
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          Admissions at CampusConnect
        </h1>
        <p className="text-[#6a7681] dark:text-gray-300 text-sm font-normal leading-normal lg:w-[80%]">
          Your journey to higher education starts here. Explore our
          comprehensive guide to the admissions process, ensuring you have all
          the information you need to apply successfully.
        </p>
      </div>

      {/* Undergraduate Admissions */}
      <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Undergraduate Admissions
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Applying for undergraduate programs at CampusConnect involves
            several key steps. Ensure you meet all eligibility criteria and
            submit your application before the deadline.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Application Deadlines
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
              {deadlines.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 flex justify-between ${
                    index !== deadlines.length - 1
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.type}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Application Process
            </h3>
            <div className="space-y-4">
              {admissionProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Eligibility Criteria
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Applicants must have a high school diploma or equivalent. Specific
              programs may have additional requirements, such as minimum GPA or
              standardized test scores. International students may need to
              provide proof of English language proficiency.
            </p>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md">
            Apply Now
          </button>
        </div>
      </section>

      {/* Graduate Admissions */}
      <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Graduate Admissions
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            For graduate programs, applicants typically need a bachelors degree
            from an accredited institution. Additional requirements may include
            GRE/GMAT scores, letters of recommendation, and a statement of
            purpose.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Application Deadlines
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
              {graduateDeadlines.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 flex justify-between ${
                    index !== deadlines.length - 1
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.type}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Application Process
            </h3>
            <div className="space-y-4">
              {admissionProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Eligibility Criteria
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Applicants must have a bachelors degree from an accredited
              institution. Specific programs may have additional requirements,
              such as minimum GPA or standardized test scores. International
              students may need to provide proof of English language
              proficiency.
            </p>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md">
            Apply Now
          </button>
        </div>
      </section>

      {/* International Student Admissions */}
      <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              International Student Admissions
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            International students should follow the same application process as
            domestic students, with additional requirements such as proof of
            English language proficiency (e.g., TOEFL, IELTS scores), visa
            documentation, and transcript evaluations.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Application Deadlines
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
              {internationalDeadlines.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 flex justify-between ${
                    index !== deadlines.length - 1
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.type}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Additional Requirements
            </h3>
            <div className="space-y-4">
              {internationalRequirements.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-medium rounded-lg hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md">
            Apply Now
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-600 dark:text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h2>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            For any questions or assistance with the admissions process, please
            contact our admissions office. We are here to help you navigate your
            application journey.
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
