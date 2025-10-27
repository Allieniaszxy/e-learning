import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">E-Learn</h3>
          <p className="text-gray-400 text-sm">
            Elevating professional skills for the modern workforce.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <h4 className="text-lg font-medium mb-2">Company</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Support</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Resources</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Course Catalog</li>
              <li>Instructors</li>
              <li>Partnerships</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 E-Learn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
