"use client";

import React from "react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:valentinuskenji34@gmail.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Download CV Button */}
          <a
            href="/path-to-your-cv.pdf" // Replace with the actual path to your CV
            download="ValentinusKenji_CV.pdf"
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Download CV
          </a>

          {/* Send Email Button */}
          <button
            onClick={handleEmailClick}
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
