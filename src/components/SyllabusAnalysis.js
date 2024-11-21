import React from "react";
import { syllabusData } from "@/constants/data";

const SyllabusAnalysis = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-md mb-4 p-4 lg:w-full">
        <h3 className="text-md font-bold mb-2">Syllabus Wise Analysis</h3>
        <div className="space-y-2">
          {syllabusData.map((item) => (
            <div className="flex flex-col p-3" key={item.title}>
              <p className="text-gray-600">{item.title}</p>
              <div className="flex flex-row items-center justify-between">
                <div className="w-[80%] bg-gray-200 rounded-full h-3 flex justify-between items-center">
                  <div
                    className={`bg-${item.color} h-3 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className={`text-${item.color} font-bold`}>
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SyllabusAnalysis;
