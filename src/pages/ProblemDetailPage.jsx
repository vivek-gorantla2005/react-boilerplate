import React from 'react';
import { useParams } from 'react-router-dom';

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    status: "Accepted",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    fullDescription: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.\n\nExample 1:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n\nExample 2:\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\n\nExample 3:\nInput: nums = [3,3], target = 6\nOutput: [0,1]`
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    status: "Pending",
    description: "You are given two non-empty linked lists representing two non-negative integers.",
    fullDescription: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\nExample 1:\nInput: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n\nExample 2:\nInput: l1 = [0], l2 = [0]\nOutput: [0]\n\nExample 3:\nInput: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]`
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    status: "Accepted",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    fullDescription: `Given a string s, find the length of the longest substring without repeating characters.\n\nExample 1:\nInput: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n\nExample 2:\nInput: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n\nExample 3:\nInput: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    status: "Pending",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    fullDescription: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).\n\nExample 1:\nInput: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.\n\nExample 2:\nInput: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000\nExplanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.`
  },
];

const ProblemDetailPage = () => {
  const { id } = useParams();
  const problem = problems.find(p => p.id === parseInt(id));

  if (!problem) {
    return <div className="text-center text-red-500 text-2xl">Problem not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-4">{problem.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              problem.difficulty === 'Easy' ? 'bg-green-600 text-white' :
              problem.difficulty === 'Medium' ? 'bg-yellow-600 text-white' :
              'bg-red-600 text-white'
            }`}
          >
            {problem.difficulty}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              problem.status === 'Accepted' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
          >
            {problem.status}
          </span>
        </div>
        <div className="prose prose-invert text-gray-300 leading-relaxed">
          <p className="whitespace-pre-wrap">{problem.fullDescription}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Solution (Coming Soon)</h2>
          <div className="bg-gray-700 p-6 rounded-md">
            <p className="text-gray-400">This section will contain the solution and code editor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;
