package com.example.Course_Registration.Service;


import com.example.Course_Registration.Model.Courses;
import com.example.Course_Registration.Model.courseRegistry;
import com.example.Course_Registration.Repository.coursesRepo;
import com.example.Course_Registration.Repository.enrolledRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class courseService {

    @Autowired
    coursesRepo coursesRepo;
    @Autowired
    enrolledRepo registryRepo;

    public List<Courses> getAvaiableCourses() {
        return coursesRepo.findAll();
    }

    public List<courseRegistry> getEnrolled() {
        return registryRepo.findAll();
    }

    public void setEnroll(courseRegistry details) {
        registryRepo.save(details);
    }
}
