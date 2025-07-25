import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          LeetCode Clone
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
            Problems
          </Link>
          <Link to="/discuss" className="text-gray-300 hover:text-white transition duration-300">
            Discuss
          </Link>
          <Link to="/contest" className="text-gray-300 hover:text-white transition duration-300">
            Contest
          </Link>
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
            Login
          </Link>
          <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
