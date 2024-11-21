"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    percentage: 90,
    rank: 1,
    correct: 10,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
