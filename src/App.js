import React from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";

const items = [
  {
    title: "What is React",
    content: "React is a frontend framework",
  },
  {
    title: "What is Bambusbjörn",
    content: "Name for panda",
  },
  {
    title: "What is express",
    content: "Backend framework",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
