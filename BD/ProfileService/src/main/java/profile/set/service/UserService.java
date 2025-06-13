package profile.set.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.set.model.Creator;
import profile.set.repository.CreatorRepository;
import profile.set.request.CreatorDetailRequest;

@Service
public class UserService {
     
  @Autowired
 public CreatorRepository  creatorRepository ;
   public Creator  CreatorDetailsService(CreatorDetailRequest request , Long id){
          if(creatorRepository.existsById(id)){
            return null ;
          } 
      
        Creator creator = new Creator() ;
         
         creator.setId(id) ;
         creator.setDisplayName(request.getDisplayName());
         creator.setNich(request.getNich()) ;
         creator.setYoutube(request.getYoutube()) ;
         creator.setPlatforms(request.getPlatforms());
         creator.setInstagram(request.getInstagram());
         creator.setFacebook(request.getFacebook());
         creator.setLinkedin(request.getLinkedin());
         creator.setTiktok(request.getTiktok());
         creator.setTwitter(request.getTwitter());
     
         return creator ;
   }
       
}
