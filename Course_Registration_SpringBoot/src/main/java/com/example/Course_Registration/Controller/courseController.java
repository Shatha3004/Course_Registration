package com.example.Course_Registration.Controller;


import com.example.Course_Registration.Model.Courses;
import com.example.Course_Registration.Model.courseRegistry;
import com.example.Course_Registration.Service.courseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin( origins = "http://localhost:5173")
public class courseController {

    @Autowired
    courseService service;

    @GetMapping("/Courses")
    public List<Courses> availableCourses()
    {
        return service.getAvaiableCourses();
    }


    @PostMapping("/Courses/Enroll")
    public void Enroll(@RequestBody courseRegistry details)
    {
        service.setEnroll(details);
    }

    @GetMapping("/")
    public String homePage()
    {
        System.out.println("home page end point hited");
        return "Homepage";
    }
}
