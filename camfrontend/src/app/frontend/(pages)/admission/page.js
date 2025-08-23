"use client";
import { useEffect, useState } from "react";

export default function AdmissionForm() {
  const [colleges, setColleges] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    selectedCollege: null,
    image: null,
  });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/colleges`)
      .then(res => res.json())
      .then(data => setColleges(data))
      .catch(err => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCollegeSelect = (collegeName) => {
    setFormData({ ...formData, selectedCollege: collegeName });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !formData.name ||
  //     !formData.subject ||
  //     !formData.email ||
  //     !formData.phone ||
  //     !formData.address ||
  //     !formData.dob ||
  //     !formData.selectedCollege
  //   ) {
  //     alert("Please fill all fields");
  //     return;
  //   }

  //   const payload = new FormData();
  //   Object.entries(formData).forEach(([key, value]) => {
  //     if (value) payload.append(key, value);
  //   });

  //   try {
  //     const res = await fetch("process.env.NEXT_PUBLIC_API_URL/admissions", {
  //       method: "POST",
  //       body: payload,
  //     });

  //     if (res.ok) {
  //       alert("Application submitted successfully!");
  //       setFormData({
  //         name: "",
  //         subject: "",
  //         email: "",
  //         phone: "",
  //         address: "",
  //         dob: "",
  //         selectedCollege: null,
  //         image: null,
  //       });
  //     } else {
  //       alert("Failed to submit application");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error submitting application");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          dob: formData.dob,
          selectedCollege: formData.selectedCollege,
        }),
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          address: "",
          dob: "",
          selectedCollege: null,
          image: null,
        });
      } else {
        const errData = await res.json();
        alert("Failed to submit: " + errData.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
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
                className={`flex items-center gap-3 p-3 rounded-lg border ${formData.selectedCollege === college.name
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

        {/* Show form only if a college is selected */}
        {formData.selectedCollege && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Admission Form for {formData.selectedCollege}
            </h2>

            <InputField
              label="Candidate Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter your subject"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <InputField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <InputField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
            <InputField
              label="Date of Birth"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />

            {/* Image Upload */}
            <div className="mt-6 mb-8 p-2 border-dashed border-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Upload Image </label>
              <input type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 dark:file:bg-gray-700 file:text-gray-700 dark:file:text-white hover:file:bg-gray-200 dark:hover:file:bg-gray-600" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// Reusable input field component (Capitalized)
function InputField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} *
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        required
      />
    </div>
  );
}
