package profile.set.controller ;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import profile.set.model.Creator;
import profile.set.request.CreatorDetailRequest;
import profile.set.service.UserService;

@RestController
@RequestMapping("/user")
public class Controller {
  
    
  @PostMapping("/creatorDetails")
 public ResponseEntity<Creator> CreatorDetail(@RequestBody  CreatorDetailRequest request){
  
     Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
     String email = auth.getName();  
     
 try{
     Creator creator = UserService.CreatorDetailsService(request , id) ; 
     
     if(creator != null){
          ResponseEntity.ok(creator) ;
     } }
     catch(Exception e){
         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .build();
     }
   
 }
   

}
