import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import Sidebar from "@/components/Sidebar";
import SkillTestCard from "@/components/SkillTestCard";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import UserContextProvider from "@/context/UserContext";
import React from "react";
import { graphData, userPercentile } from "@/constants/data";

const Home = () => {
  return (
    <UserContextProvider>
      <div className="max-h-screen">
        <header className="flex justify-between items-center bg-white py-4 border-b border-gray-300">
          <div className="px-6">
            <h1 className="text-2xl font-bold">WhatBytes</h1>
          </div>
          <div className="mr-5 flex justify-center items-center font-bold border border-gray-400 rounded-2xl p-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              className="h-8"
            />
            User name
          </div>
        </header>
        <main className="max-h-screen flex flex-col lg:flex-row">
          <div className="">
            <Sidebar />
          </div>
          <div className="lg:p-10 lg:w-[55%]">
            <SkillTestCard />
            <ComparisonGraph data={graphData} userPercentile={userPercentile} />
          </div>
          <div className="p-4 flex flex-col lg:w-[30%]">
            <SyllabusAnalysis />
            <QuestionAnalysis />
          </div>
        </main>
      </div>
    </UserContextProvider>
  );
};

export default Home;
