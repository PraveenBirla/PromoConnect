package login.login.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import login.login.Model.User;
import login.login.Repository.UserRepository;
import login.login.Request.SingupRequest;

@Service
public class UserService {
      
  @Autowired
  public  UserRepository userrepository ; 

  @Autowired
  

  private  BCryptPasswordEncoder passwordEncoder;

  public String userRegister(SingupRequest request){
       if(userrepository.existsByEmail(request.getEmail())){
                   return "Email already Exist" ;
       } 
       
       User user = new User() ;
       user.setUsername(request.getUsername()) ;
       user.setEmail(request.getEmail());
       user.setPassword(passwordEncoder.encode(request.getPassword()));

       userrepository.save(user) ;
       return "User registered successfully!" ;
  }
}
