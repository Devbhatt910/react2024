import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Header</h1>
      <h2>{props.title}</h2>
      <h3 style={{ color: props.color }}>{props.color}</h3>
    </div>
  );
};

export default Header;
