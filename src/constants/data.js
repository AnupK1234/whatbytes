import { FaChartBar, FaFileAlt, FaMedal } from "react-icons/fa";

export const graphData = [
  { percentile: 0, value: 5 },
  { percentile: 10, value: 20 },
  { percentile: 25, value: 50 },
  { percentile: 50, value: 72 },
  { percentile: 75, value: 80 },
  { percentile: 90, value: 90 },
  { percentile: 100, value: 100 },
];

export const userPercentile = 40;

export const menuItems = [
  { name: "Dashboard", icon: <FaChartBar />, key: "Dashboard" },
  { name: "Skill Test", icon: <FaMedal />, key: "Skill Test" },
  { name: "Internship", icon: <FaFileAlt />, key: "Internship" },
];

export const syllabusData = [
  {
    title: "HTML Tools, Forms, History",
    percentage: 80,
    color: "blue-500",
  },
  {
    title: "Tags & References in HTML",
    percentage: 60,
    color: "orange-400",
  },
  {
    title: "Tables & References in HTML",
    percentage: 24,
    color: "red-500",
  },
  {
    title: "Tables & CSS Basics",
    percentage: 90,
    color: "green-500",
  },
];
