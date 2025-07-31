package profile.set.controller ;


import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import profile.set.client.AuthClient;
import profile.set.model.BrandDetails;
import profile.set.model.Creator;
import profile.set.repository.BrandDetailsRepository;
import profile.set.request.BrandDetailsRequest;
import profile.set.request.CreatorDTO;
import profile.set.request.CreatorDetailRequest;
import profile.set.request.UserInfo;
import profile.set.service.BrandDetailsService;
import profile.set.service.UserService;
import profile.set.service.CreatorService;

@CrossOrigin(origins=" http://localhost:5173") 
@RestController
@RequestMapping("/user")
public class Controller { 

    @Autowired
   public  UserService userService ; 
      @Autowired
   public AuthClient authClient ;
    @Autowired
    private BrandDetailsService brandDetailsService;
   @Autowired
    private BrandDetailsRepository brandDetailsRepository; 
    
   @Autowired
     public  CreatorService creatorService;

    
  @PostMapping("/creatorDetails")
 public ResponseEntity<Creator> CreatorDetail(@RequestBody  CreatorDetailRequest request , HttpServletRequest httpRequest){
          
      
 try{
      String authHeader = httpRequest.getHeader("Authorization");
      if(authHeader != null && !authHeader.startsWith("Bearer ")){
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build() ;
      }  

         String token = authHeader.substring(7); 
          
         System.out.println("Calling extract-user with token: Bearer " + token);
         UserInfo userInfo = authClient.extractUserInfo("Bearer " + token);
         
         
         Long id = userInfo.getUserId() ; 

         Creator creator = userService.CreatorDetailsService(request, id) ;
    
         if(creator != null){
           return ResponseEntity.ok(creator);
         } 
             
          else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

           
     } 
     catch(Exception e){
       e.printStackTrace();
         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .build();
     }
   
 } 

    @GetMapping("/GetcreatorDetails")
public ResponseEntity<CreatorDTO> getCreatorDetails(HttpServletRequest httpRequest) {
      try {
        String authHeader = httpRequest.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = authHeader.substring(7);
        UserInfo userInfo = authClient.extractUserInfo("Bearer " + token);
        Long userId = userInfo.getUserId();

        CreatorDTO creatorDTO = userService.getCreatorDetailsDTO(userId);
        return ResponseEntity.ok(creatorDTO);

    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}  


 @PostMapping("/brandDetails")
    public ResponseEntity<BrandDetails> submitBrandDetails(
            @RequestBody BrandDetailsRequest request,
            HttpServletRequest httpRequest
    ) {
        try {
             
            String authHeader = httpRequest.getHeader("Authorization");
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String token = authHeader.substring(7);
            UserInfo userInfo = authClient.extractUserInfo("Bearer " + token);
            Long userId = userInfo.getUserId();

           
            BrandDetails saved = brandDetailsService.saveBrandDetails(request, userId);

            return ResponseEntity.ok(saved);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } 
    }


 @GetMapping("/getbrandDetails")
    public ResponseEntity<?> getBrandDetails(@RequestHeader("Authorization") String authHeader) {
        try {
            String token = authHeader.replace("Bearer ", "");
           UserInfo userInfo = authClient.extractUserInfo("Bearer " + token);  
            Long userId = userInfo.getUserId() ;
            Optional<BrandDetails> optional = brandDetailsRepository.findByUserId(userId);

            if (optional.isPresent()) {
                return ResponseEntity.ok(optional.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Brand details not found for user.");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
    }
     
     @GetMapping("/getAllCreators")
    public ResponseEntity<List<CreatorDTO>> getAllCreators() {
        List<CreatorDTO> creators = creatorService.getAllCreators();
        return new ResponseEntity<>(creators, HttpStatus.OK);
    } 


}
