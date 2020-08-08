import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //run function only once when the component renders, by passing [] as second paramter
  useEffect(() => {
    const onBodyClick = (event) => {
      //ref.current contains div with class ui form
      //contains element belongs to all dom elements
      if (ref.current.contains(event.target)) {
        //if the Dropdown component contains an event just return null and dont setOpen to false bescouse it was set to true within the dropdown div
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    //cleanup function => gets also called wehn the component gets removed from the dom
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
