package com.example.Course_Registration.Repository;

import com.example.Course_Registration.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userDetailRepo extends JpaRepository<Users,Integer> {
    Users findByUsername(String username);
}
