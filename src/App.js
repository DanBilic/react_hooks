import React, { useState } from "react";

//components
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from ".//components/Translate";

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

const showAccordian = () => {
  if (window.location.pathname === "/") {
    return <Accordian items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  //destructure out local state and update func and rename local state to selected and update function to setSelected
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
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
