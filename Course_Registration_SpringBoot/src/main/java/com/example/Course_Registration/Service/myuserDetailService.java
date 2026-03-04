package com.example.Course_Registration.Service;

import com.example.Course_Registration.Model.Users;
import com.example.Course_Registration.Model.userPrincipal;
import com.example.Course_Registration.Repository.userDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class myuserDetailService implements UserDetailsService {

    @Autowired
    private userDetailRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Users user=repo.findByUsername(username);
        System.out.println("userdetails is loaded");
            if(user==null)
            {
                System.out.println("user not found in db");
                throw new UsernameNotFoundException("user not found on DB");
            }
            System.out.println("username -> "+user.getUsername());
            System.out.println("password -> "+user.getPassword());
            return new userPrincipal(user);
    }
}
