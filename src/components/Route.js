//implement own routing

import React from "react";
//cildren prop -> the children components of Route component
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
