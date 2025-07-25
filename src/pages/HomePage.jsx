import React from 'react';
import { Link } from 'react-router-dom';

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    status: "Accepted",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    status: "Pending",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    status: "Accepted",
    description: "Given a string s, find the length of the longest substring without repeating characters."
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    status: "Pending",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays."
  },
];

const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Problems</h1>
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                #
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-700 transition duration-300">
                <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                  <p className="text-white whitespace-no-wrap">{problem.id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                  <Link to={`/problems/${problem.id}`} className="text-blue-400 hover:text-blue-500 hover:underline whitespace-no-wrap">
                    {problem.title}
                  </Link>
                </td>
                <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                      problem.difficulty === 'Easy' ? 'text-green-400' :
                      problem.difficulty === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                      problem.status === 'Accepted' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {problem.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
