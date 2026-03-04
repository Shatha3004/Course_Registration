package com.example.Course_Registration.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@AllArgsConstructor
@Data
public class Courses {

    @Id
    private String CourseID;
    private String CourseName;
    private String Trainer;
    private int Duriation;

    Courses()
    {

    }

}
