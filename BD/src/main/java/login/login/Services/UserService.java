package login.login.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import login.login.Model.User;
import login.login.Repository.UserRepository;
import login.login.Request.SingupRequest;
import login.login.Request.UpdateRequest ;
import login.login.component.JwtUtil;

@Service
public class UserService {
    
  @Autowired
  public  UserRepository userrepository ; 


  @Autowired 
  public JwtUtil jwtUtil ;
  
  

  private  BCryptPasswordEncoder passwordEncoder ; 

   public UserService(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

  public User userRegister(SingupRequest request){
       if(userrepository.existsByEmail(request.getEmail())){
                   return null ;
       } 
       
       User user = new User() ;
       user.setUsername(request.getUsername()) ;
       user.setEmail(request.getEmail());
       user.setPassword(passwordEncoder.encode(request.getPassword()));

       userrepository.save(user) ;
       return user ;
  } 

  public User userUpdate(UpdateRequest request , String email){ 
    
       Optional<User> userOptional = userrepository.findByEmail(email) ;
       if(userOptional.isEmpty()){
        System.err.println("User not found with email " ); 
            return null;
       } 
       
       User user = userOptional.get() ;
       user.setUsertype(request.getUserType());
       User Updateduser = userrepository.save(user) ; 

       return Updateduser ;
  }
}
