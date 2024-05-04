import React from "react";

const StuList = (props) => {
  return (
    <div>
      <h1>{props.student.id}</h1>
      <h2>{props.student.name}</h2>
      <h2>{props.student.age}</h2>
      <h3>{props.title}</h3>
    </div>
  );
};

export default StuList;
