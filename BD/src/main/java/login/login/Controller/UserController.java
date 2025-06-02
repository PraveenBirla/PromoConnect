package login.login.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import login.login.Model.User;
import login.login.Request.SingupRequest;
import login.login.Request.UpdateRequest;
import login.login.Services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins=" http://localhost:5173")
@Controller
@RequestMapping("/user")
public class UserController { 

  @Autowired
 public  UserService userService ; 

  
    
  @PostMapping("/singup")
  public ResponseEntity<Long>  registerUser(@RequestBody SingupRequest request) {
      User user  = userService.userRegister(request) ;

      if (user != null) {
            return ResponseEntity.ok(user.getId());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
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
