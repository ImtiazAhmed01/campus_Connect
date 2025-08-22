"use client";
import { useState } from "react";

export default function AdmissionForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    selectedCollege: null,
  });

  const colleges = [
    {
      name: "University of Arts",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpDlYKCbkG0h8eOxc1t-1ptoWYWlGJY46p_v25f26rUREmaFPLYdkLNYBefhTuY8yBzNxH3LbEoaekXnXKoBUEJ14lwRgrrbPm3ej0CQd2tXchRll_y0sG5Tj9lOY52Bwd01SyTNcey2UgUDGCEG4NhoRvihZCb9AotJXIg76xKUPFe2cos5bQP-PYhxrYHfAVd4Jb8X3hhqwOYgJ1QdEo4no3mGh4z4IfI-6gnRX5XM32bG0K4ZEisr0ibUKEMJWc-o8PwK31Row",
    },
    {
      name: "Tech Institute",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuGHcXtbHigFIxd5zLhMQAUXYjvFgH2tFlwuWB5B86zFv743Vx3zrHH9JCa7BD_uJn4HAEaZ1DhQSaq-WKQRyZ1eYvqcLQgusMQvxDyCXhe3lEC4rQ02JUrenjrsYDPTWnZfoq94CIBD4PXGEZ29t6yCOPklcFCNzHDeN5y-MgfevFBwnsEXqe3X_sNuytnZ8B9z36CesYIIizIysxt9tzk4_rCvohemkiE9ynMMXwKGVqd2vmRQsEqFczXRk_am4qmizWbcSOH8M",
    },
    {
      name: "Business School",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUNfQAjgjNdCzaB7Ps2ofA9WqiMwvrS1lYoMXVMZhFKrpKMjXI7uG9tW6H9DgDAt7bsehDbzd5fMNSmap-HrG0BgH2B53IU_RFTsGM3a-7dTZm7hrDayk6V9wkigH_skU9OlUFsrmfC5xgrNHfWPW-gDbC-AtWkFrS0vmAWP1xMLSJMvycg8FaG_m6cBom8DDurAYhQuSPpdpSogVjRqRjpcktqIQo_exq0y-ZQC_DI6Jjy3A0IERVz7nOxzMEug4tBz3-jUtn5mo",
    },
    {
      name: "Medical College",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByLKI2M4w4ps_8huzNGpM3d2aas2fYibRDHjbu_H0rKgyu9ebMNiCynvF31Zp7SJFY_EFGYN9WGhJA286bUdDDbu2bCMUD5offD9ouUTWQo2yOxTmoj7HR9KtIYQWg0pp1b6wBpF3FslIoqfpgR6kI6V0r2RMmG1HJ3NiyW0Yf66iAz5nvS9cfVMInbaaj3rYCfAiecw_RtELkct9es0h67Eox4z-186u23WCUPRWsrbMm9sJoOaU4_SnyYHhlycJ1U8OmAwvNI2c",
    },
    {
      name: "Law School",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCt2qEqE9w7qHPUaQgGmRDts1wsSFY0kNAaPtQ5NMQ8M2QUVOMS5raLxDi61ieZ9Mu34O2qUHAogNKuZiJqnPT22HPwi_31IEUNUG3SK8toaFZufOOCq9fYO7OAkehLHlnoRMNzgWgcjpFNDLVnu3sZr6EPmqtZHMfaaoVTaQAUcvXPLGD9xGaNwf1DC6D4fzF_-v2G117zP9fpx5SPgz71ymxwoqzScc9laUJjSA9mCxavabzweRfNZf2sTPqJlMtSsB0kOU0ep5U",
    },
    {
      name: "Liberal Arts College",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuALYZ62b3HqGooj40IgSezC7rEvlusemoXaWliS866eMF8owmjl44J9xqgJ8VMFYBfaiyN2KCCpvTgJxPf_HM6pkzyDK5dKxXxVcWn40AdQwEiotnqnvOkkbieU4ijtD00gNMNbrGEPmcfNiedi2ZPT7utX9r-13kmVoPGj1Qavtn4udcls5oPdvSROR5X00nlSmylh_cWXyGPt8fEiaUbF0d5lFjtSjrJ2oXEom-mvCXM638ONKyJoVuQQb9BBrynNvDasZzsbrqs",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCollegeSelect = (collegeName) => {
    setFormData({
      ...formData,
      selectedCollege: collegeName,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields are filled
    if (
      !formData.name ||
      !formData.subject ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.dob ||
      !formData.selectedCollege
    ) {
      alert("Please fill all fields");
      return;
    } else {
      // Submit logic here
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        subject: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        selectedCollege: null,
      });
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-40 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-14 text-center">
          College Admissions
        </h1>

        {/* College Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Select a College
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {colleges.map((college, index) => (
              <div
                key={index}
                onClick={() => handleCollegeSelect(college.name)}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  formData.selectedCollege === college.name
                    ? "border-blue-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer`}
              >
                <div
                  className="w-10 h-10 bg-cover bg-center rounded-lg shrink-0"
                  style={{ backgroundImage: `url('${college.image}')` }}
                />
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {college.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Admission Form
          </h2>

          <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Candidate Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter your subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="mt-8 mb-10">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
              <div className="flex flex-col items-center gap-2 mb-4">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Upload Image
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click to upload your profile image
                </p>
              </div>
              <button
                type="button"
                className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
