package com.example.Course_Registration.Repository;

import com.example.Course_Registration.Model.courseRegistry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface enrolledRepo extends JpaRepository<courseRegistry,Integer> {
}
