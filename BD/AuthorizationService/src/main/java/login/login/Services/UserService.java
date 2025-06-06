package login.login.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import login.login.Model.User;
import login.login.Repository.UserRepository;
import login.login.Request.LogingRequest;
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
   
  public User UserLogin(LogingRequest request){
          Optional<User> userOptional = userrepository.findByEmail(request.getEmail()); 

          if(userOptional.isPresent()){
          User user = userOptional.get();

          if(passwordEncoder.matches( request.getPassword() , user.getPassword())){
               return user ;
          }}  

          throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
  }

}
