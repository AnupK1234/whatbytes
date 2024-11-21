"use client";

import { useContext, useState } from "react";
import UpdateScoresModal from "./UpdateScoresModal";
import { UserContext } from "@/context/UserContext";
import { FaTrophy } from "react-icons/fa6";
import { PiPercentFill } from "react-icons/pi";
import { FcOk } from "react-icons/fc";

const SkillTestCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 max-w-4xl mx-auto">
        <div className="border border-gray-300 rounded-md p-3 h-[8rem] lg:h-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="lg:mr-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                  alt="HTML Icon"
                  className="w-16 lg:w-12 lg:h-12"
                />
              </div>
              <div>
                <h2 className="lg:text-xl font-semibold">
                  Hyper Text Markup Language
                </h2>
                <p className="text-gray-500 text-sm">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <button
              className="bg-blue-800 text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              Update
            </button>
          </div>
        </div>

        {/* Quick Statistics Section */}
        <div className="border border-gray-300 rounded-md mb-4 p-3 lg:pt-2 lg:pb-4 lg:px-2">
          <div className="font-bold mb-4">Quick Statistics</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-evenly items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaTrophy className="text-yellow-400 text-xl lg:text-3xl" />
              </div>
              <div>
                <span className="lg:text-lg font-semibold">
                  {userData.rank}
                </span>
                <p className="text-gray-500">Your Rank</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <PiPercentFill className="text-xl lg:text-3xl" />
              </div>
              <div>
                <span className="lg:text-lg font-semibold">
                  {userData.percentage}%
                </span>
                <p className="text-gray-500">Percentile</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="bg-gray-100 p-3 rounded-full">
                <FcOk className="text-xl lg:text-3xl" />
              </div>
              <div>
                <span className="lg:text-lg font-semibold">
                  {userData.correct} / 15
                </span>
                <p className="text-gray-500">Correct Answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateScoresModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default SkillTestCard;
