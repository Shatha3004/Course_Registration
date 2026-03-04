import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Student.css';

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Courses/Enrolled")
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="students-wrapper">
      <h2>Enrolled Students</h2>

      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.emailID || "—"}</td>
                  <td>{s.courseName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">No students enrolled</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
