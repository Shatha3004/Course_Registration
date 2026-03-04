package com.example.Course_Registration.Repository;

import com.example.Course_Registration.Model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface coursesRepo extends JpaRepository<Courses,String> {
}
