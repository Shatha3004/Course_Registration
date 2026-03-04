package com.example.Course_Registration.Controller;


import com.example.Course_Registration.Model.Users;
import com.example.Course_Registration.Model.courseRegistry;
import com.example.Course_Registration.Service.courseService;
import com.example.Course_Registration.Service.userService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Course_Registration.Model.Login;


import java.util.List;

@RestController
public class adminController {

    @Autowired
    courseService courseservice;

    @Autowired
    userService userservice;

    @GetMapping("/Courses/Enrolled")
    public List<courseRegistry> Enrolled()
    {
        return courseservice.getEnrolled();
    }

    @PostMapping("/Register")
    public String adduser(@RequestBody Users user)
    {
      return userservice.adduser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Login login , HttpSession session){

        System.out.print(login.getUsername()+" "+login.getPassword());

            try{
                boolean auth= userservice.authenticate(login.getUsername(), login.getPassword());

                if(auth)
                {
                    session.setAttribute("user",login.getUsername());
                    return ResponseEntity.ok("Login was successful");
                }else{
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
                }
            }catch (Exception e)
            {
                System.out.print("error occured");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
            }
    }
}
