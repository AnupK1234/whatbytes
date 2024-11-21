"use client";
import { menuItems } from "@/constants/data";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Skill Test");

  return (
    <div className="hidden lg:block w-64 h-screen bg-white shadow-md">
      <div className="p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-4 cursor-pointer p-2 rounded-md ${
                active === item.key
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
