import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../assets/scrollposition.json";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState("intro");

  const setScrollPositionHandler = (scrollPosition) => {
    setScrollPosition(data[scrollPosition]);
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  const value = {
    scrollPosition,
    setScrollPositionHandler,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
