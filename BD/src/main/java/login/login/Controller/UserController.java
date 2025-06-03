package login.login.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import login.login.Model.User;
import login.login.Request.SingupRequest;
import login.login.Request.UpdateRequest;
import login.login.Services.UserService;
import login.login.component.JwtUtil;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins=" http://localhost:5173") 
@RestController
@RequestMapping("/user")
public class UserController { 

  @Autowired
 public  UserService userService ; 

   @Autowired
   private JwtUtil  jwtUtil ;
    
  @PostMapping("/signup")
  public ResponseEntity<Map<String,String>>  registerUser(@RequestBody SingupRequest request) { 

    try {
        User user  = userService.userRegister(request) ;
        
      if (user != null) { 
          Map<String ,String> response = new HashMap<>();
          response.put("token" , jwtUtil.generateToken(user.getEmail())) ;
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }   
    } 
     catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .build();
    }
     
        
  }  
 
  @PutMapping("/{id}/userType")
  public ResponseEntity<User> putMethodName(@PathVariable("id") Long id, @RequestBody UpdateRequest request) {
      User updatedUser = userService.userUpdate(request, id) ;

      
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);  
        } else {
            
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
      
      
  }
   

}
