import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New Language or text");
  }, [language, text]);

  return <div></div>;
};

export default Convert;
