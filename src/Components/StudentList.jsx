import React from "react";
import { Link } from "react-router-dom";
import "./StudentList.css";

function StudentList({ id, name, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>{course}</p>

      <Link to={`/students/${id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default StudentList;