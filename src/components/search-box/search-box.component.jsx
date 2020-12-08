import React from "react";
import "./search-box.component.css";

const SearcBox = ({ placeholder, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      className="search"
      placeholder={placeholder}
    ></input>
  );
};
export default SearcBox;
