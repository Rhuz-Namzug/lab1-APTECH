import React, { useState, useEffect } from "react";
import StudentList from "../Components/StudentList";
import "../Pages/Students.css";

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
    <div className="students-page">
      <h1 className="title">Student List</h1>

      <div className="student-container">
        {students.map((student) => (
          <StudentList
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
          />
        ))}
      </div>

    </div>
  );
}

export default Students;