import React from "react";
import { Link } from "react-router-dom";
import "./StudentList.css";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/students/${student.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;