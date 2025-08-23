"use client";
import { useEffect, useState } from "react";

export default function MyCollege() {
  const [admissions, setAdmissions] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(3);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admissions`)
      .then(res => res.json())
      .then(data => setAdmissions(data))
      .catch(err => console.error(err));
  }, []);

  const handleReviewSubmit = async (admissionId) => {
    if (!reviewText) return alert("Please enter a review");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admissionId, reviewText, rating }),
      });

      if (res.ok) {
        alert("Review added successfully!");
        setReviewText("");
        setRating(3);
      } else {
        alert("Failed to add review");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding review");
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-40 py-8 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My College
      </h1>

      {admissions.map(admission => (
        <div key={admission._id} className="p-4 mb-6 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-2">{admission.selectedCollege}</h2>
          <p><strong>Name:</strong> {admission.name}</p>
          <p><strong>Subject:</strong> {admission.subject}</p>
          <p><strong>Email:</strong> {admission.email}</p>
          <p><strong>Phone:</strong> {admission.phone}</p>
          <p><strong>Address:</strong> {admission.address}</p>
          <p><strong>DOB:</strong> {admission.dob}</p>

          {/* Review section */}
          <div className="mt-4">
            <textarea
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              placeholder="Write a review"
              className="w-full p-2 rounded-lg mb-2"
            />
            <div className="flex items-center gap-2 mb-2">
              <label>Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={e => setRating(Number(e.target.value))}
                className="w-16 p-1 rounded-lg"
              />
            </div>
            <button
              onClick={() => handleReviewSubmit(admission._id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
