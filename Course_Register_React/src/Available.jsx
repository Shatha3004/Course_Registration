import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Available.css';

function Available() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Courses")
      .then(response => setCourses(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="course-wrapper">
      <h2>Available Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.CourseID}>
            <h3>{course.CourseName}</h3>
            <p><strong>Trainer:</strong> {course.Trainer}</p>
            <p><strong>Duration:</strong> {course.Duriation} Months</p>
            {/* <button className="enroll-btn">Enroll</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Available;
