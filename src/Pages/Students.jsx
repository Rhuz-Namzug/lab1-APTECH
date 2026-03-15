import React, { useState, useEffect } from "react";

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    const studentData = [
    { id: 1, name: "Rhuzl", course: "BSIT" },
    { id: 2, name: "Cyrus", course: "BSCS" },
    { id: 3, name: "Jay", course: "BSIS" },
    { id: 4, name: "Deon", course: "BSIT" },
    { id: 5, name: "Frex", course: "BSBA" },
    { id: 6, name: "Karl", course: "BSME" },
    { id: 7, name: "Miguel", course: "BSIT" },
    { id: 8, name: "Zed", course: "BSCS" },
    { id: 9, name: "Aldrich", course: "BSA" },
    { id: 10, name: "Daisy", course: "BSCE" }
  ];
      setStudents(studentData);

  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Students;