import React, { useState } from "react";

//components
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from ".//components/Translate";
import Header from "./components/Header";

//own routing component
import Route from "./components/Route";

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
  //destructure out local state and update func and rename local state to selected and update function to setSelected
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
