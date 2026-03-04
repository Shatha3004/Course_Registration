package com.example.Course_Registration.Service;


import com.example.Course_Registration.Model.Users;
import com.example.Course_Registration.Repository.userDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    userDetailRepo repo;


    @Autowired
    private PasswordEncoder encoder;

    public String adduser(Users user) {

        user.setPassword(encoder.encode(user.getPassword()));

        Users username = repo.findByUsername(user.getUsername());

        if(username==null)
        {
            repo.save(user);
            return "Registered Successfully";
        }
        return "user already exists";
    }


    public boolean authenticate(String username,String password)
    {
        Users user=repo.findByUsername(username);

        if(user==null){
            throw new UsernameNotFoundException("user is not found");
        }

        if(!encoder.matches(password,user.getPassword())){
            throw new BadCredentialsException("password is incorrect");
        }

        return true;
    }
}
