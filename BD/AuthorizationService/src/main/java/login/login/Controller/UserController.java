package login.login.controller;

import java.util.HashMap;
import java.util.Map;

   
import org.springframework.security.core.Authentication ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import login.login.Model.User;
import login.login.Request.LogingRequest;
import login.login.Request.SingupRequest;
import login.login.Request.UpdateRequest;
import login.login.Request.UserInfo;
import login.login.Services.UserService;
import login.login.component.JwtUtil;

import org.springframework.web.bind.annotation.CrossOrigin;
 
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
 



@CrossOrigin(origins="https://promo-connect.vercel.app") 
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
          response.put("token" , jwtUtil.generateToken(user.getEmail() , user.getId())) ;
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

  @PostMapping("/login")
          public ResponseEntity<Map<String,String>> loginUser(@RequestBody LogingRequest request){
            try{
                User user = userService.UserLogin(request);
                String token = jwtUtil.generateToken(user.getEmail(), user.getId())  ;
                 
                    Map<String , String> response = new HashMap<>() ;
                    response.put("token", token) ;
                    return ResponseEntity.ok(response);  
                 
            }  
            catch (ResponseStatusException e) {
         
            Map<String, String> error = new HashMap<>();
             error.put("error", e.getReason());
            return ResponseEntity.status(e.getStatusCode()).body(error);
        
    } catch (Exception e) {
       
        e.printStackTrace(); 
        Map<String, String> error = new HashMap<>();
        error.put("error", "Something went wrong");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
           }
  
  
 
  @PutMapping("/userType")
  public ResponseEntity<User> putMethodName( @RequestBody UpdateRequest request ) { 

     Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
     String email = auth.getName();
     

    User updatedUser = userService.userUpdate(request, email) ;

      
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);  
        } else { 
            
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
      
      
  }  

  @GetMapping("/validate-token")
  public ResponseEntity<Void>  validateToken(@RequestHeader("Authorization") String authHeader) {
       if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String token = authHeader.substring(7);
        if (jwtUtil.validateToken(token)) { 
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    } 
   
    @PostMapping("/extract-user")
    public ResponseEntity<?> extractUserFromToken(@RequestHeader("Authorization") String token){
           try{
             if ( token != null && token.startsWith("Bearer ")) {
                token = token.substring(7);
            }  

            if(!jwtUtil.validateToken(token)){
              return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid token");
            }  


            String email = jwtUtil.getUsernameFromToken(token);
            Long userId = jwtUtil.getuserIdFromToken(token);
  
            UserInfo response = new UserInfo(email, userId) ;
         
             return  ResponseEntity.ok(response) ;

           }
           catch(Exception e){
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build() ;
           }
    }

  }  




  


   


