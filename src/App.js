import React, { useState } from "react";

//components
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  { label: "The color red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "The color blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
