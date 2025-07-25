import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8 shadow-lg">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} LeetCode Clone. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
