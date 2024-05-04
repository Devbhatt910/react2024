import React from "react";

const MapDemo = () => {
  var students = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "George Washington",
    },
  ];
  return (
    <div>
      <h1>Map Demo</h1>
      <ul>
        {students.map((stu) => {
          return (
            <div>
              <h1>{stu.id}</h1>
              <h1>{stu.name}</h1>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MapDemo;
