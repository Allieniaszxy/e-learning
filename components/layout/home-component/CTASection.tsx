import React from "react";

const TeamFutureSection: React.FC = () => {
  return (
    <div className="bg-blue-50 py-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Invest in Your Team&apos;s Future
      </h2>
      <p className="text-gray-600 mb-6">
        Join thousands of leading organizations and empower your workforce with
        continuous learning and professional development.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200">
        Get Started with a Corporate Plan
      </button>
    </div>
  );
};

export default TeamFutureSection;
