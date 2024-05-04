import React from "react";
import StuList from "./StuList";

const Stu = (props) => {
  var student = {
    id: 1,
    name: "John Doe",
    age: 25,
  };

  return (
    <div>
      <h2>Title From App:{props.title}</h2>

      <StuList student={student} title={props.title} />
    </div>
  );
};

export default Stu;
