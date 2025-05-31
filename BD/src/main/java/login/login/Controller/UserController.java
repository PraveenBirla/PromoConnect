package login.login.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import login.login.Request.SingupRequest;
import login.login.Services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins=" http://localhost:5173")
@Controller
@RequestMapping("/user")
public class UserController { 

  @Autowired
 public  UserService userService ;
    
  @PostMapping("/singup")
  public ResponseEntity<String>  registerUser(@RequestBody SingupRequest request) {
       String result = userService.userRegister(request) ;

      if (result.equals("User registered successfully!")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
        }
       
  }
   
}
