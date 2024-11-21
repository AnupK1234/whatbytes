"use client";
import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";

const QuestionAnalysis = ({ correctAnswers = 12 }) => {
  const { userData, setUserData } = useContext(UserContext);
  const totalQuestions = 15;
  const percentage = (userData.correct / totalQuestions) * 100;
  const circumference = 2 * Math.PI * 40; // 40 is the radius of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Question Analysis
        </h2>
        <span className="text-blue-600 font-bold">{userData.correct}/15</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        You scored <span className="font-bold">{userData.correct}</span>{" "}
        questions correct out of{" "}
        <span className="font-bold">{totalQuestions}</span>. However, it still
        needs some improvements.
      </p>
      <div className="relative">
        {/* SVG for the circular chart */}
        <svg className="w-28 h-28 transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="40"
            className="stroke-gray-200 fill-none"
            strokeWidth="8"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40"
            className="stroke-blue-500 fill-none"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-blue-500">🎯</span>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <span>
          {userData.correct}/{totalQuestions}
        </span>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
