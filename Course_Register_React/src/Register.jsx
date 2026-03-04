import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Register.css'

function Register() {
  
    const navigate = useNavigate();
    
   const [student, setstudent] = useState({
        name: "",
        emailID: "",
        courseName: "",
        });

    const change =(e) =>{
        setstudent({
            ...student,
            [e.target.name]:e.target.value
        });
    };

    const submit = (e) =>{
            e.preventDefault();

            axios.post("http://localhost:8080/Courses/Enroll",student)
            .then( () => {
                alert("added successfulluy");
                // console.log(student);
                navigate("/");
            })
            .catch((error)=>{
                alert(error.message);
            })
    }


    const [courses,setCourses]= useState([])


    useEffect(() => {
    axios.get("http://localhost:8080/Courses")
      .then(response => setCourses(response.data))
      .catch(err => console.error(err));
  }, []);



  return (
   <div className="form-wrapper">
  <div className="form-card">
    <h2>Course Registration</h2>

    <form onSubmit={submit}>

      <h3 className="section-title">Student Details</h3>

      <div className="input-group">
        <input type="text" name="name" onChange={change} placeholder="Student Name" />
      </div>

      <div className="input-group">
        <input type="email" name="emailID" onChange={change} placeholder="Email ID" />
      </div>


        <div className="input-group">
          <select name="courseName" onChange={change}>
            <option value="">Select Course Name</option>
            {
              courses.map((c) =>(
                   <option key={c.CourseID} value={c.courseName}>{c.CourseName}</option>
              ))
            }
          </select>
        </div>

      <button className="submit-btn" type="submit">
        Register Course
      </button>
    </form>
  </div>
</div>
  )
}

export default Register
