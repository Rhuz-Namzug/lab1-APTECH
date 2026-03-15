import React from "react";
import { useParams, Link } from "react-router-dom";
import "../Pages/StudentDetails.css";

function StudentDetail() {

  const { id } = useParams();

  const studentData = [
    { id: 1, name: "John Cruz", course: "BS Information Technology" },
    { id: 2, name: "Maria Santos", course: "BS Computer Science" },
    { id: 3, name: "Kevin Reyes", course: "BS Information Systems" },
    { id: 4, name: "Angela Garcia", course: "BS Information Technology" },
    { id: 5, name: "Mark Dela Cruz", course: "BS Computer Science" },
    { id: 6, name: "Nicole Ramos", course: "BS Information Systems" },
    { id: 7, name: "David Lopez", course: "BS Information Technology" },
    { id: 8, name: "Carla Mendoza", course: "BS Computer Science" },
    { id: 9, name: "James Torres", course: "BS Information Systems" },
    { id: 10, name: "Liza Castillo", course: "BS Information Technology" }
  ];

  const student = studentData.find(
    (s) => s.id === parseInt(id)
  );

  return (
    <div className="student-detail-page">
      <h1>Student Details</h1>

      {student ? (
        <div className="student-detail-card">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Course:</strong> {student.course}</p>

          <Link to="/students" className="back-button">
            Back to Student List
          </Link>
        </div>
      ) : (
        <p>Student not found.</p>
      )}

    </div>
  );
}

export default StudentDetail;