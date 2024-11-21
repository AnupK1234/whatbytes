"use client";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ComparisonGraph = ({ data, userPercentile }) => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Comparison Graph
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        You scored{" "}
        <span className="font-bold">{userData.percentage}% percentile</span>{" "}
        which is lower than the average percentile{" "}
        <span className="font-bold">72%</span> of all the engineers who took
        this assessment.
      </p>

      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="percentile" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot />
          </LineChart>
        </ResponsiveContainer>
        {/* User Percentile Indicator */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center"
          style={{ bottom: "20px" }}
        >
          <span className="text-xs text-gray-500">your percentile</span>
          <div className="w-0.5 h-8 bg-gray-400 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;
