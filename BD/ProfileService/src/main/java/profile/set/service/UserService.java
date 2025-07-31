package profile.set.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import profile.set.model.Creator;
import profile.set.model.CreatorPlatform;
import profile.set.repository.CreatorRepository;
import profile.set.request.CreatorDTO;
import profile.set.request.CreatorDetailRequest;

@Service
public class UserService {     
  @Autowired
 public CreatorRepository  creatorRepository ;
   public Creator  CreatorDetailsService(CreatorDetailRequest request , Long id){
           Creator creator = creatorRepository.findByUserId(id).orElse(new Creator());
         
         creator.setUserId(id) ;
         creator.setDisplayName(request.getDisplayName());
         creator.setNiche(request.getNiche()) ;
         creator.setYoutube(request.getYoutube()) ;
         creator.setInstagram(request.getInstagram());
         creator.setFacebook(request.getFacebook());
         creator.setLinkedin(request.getLinkedin());
         creator.setTiktok(request.getTiktok());
         creator.setTwitter(request.getTwitter());
         creator.setBio(request.getBio()) ;
      
          List<CreatorPlatform> platformEntities = request.getPlatforms().stream()
        .map(platform -> {
            CreatorPlatform cp = new CreatorPlatform();
            cp.setPlatform(platform);
            cp.setCreator(creator);  
            return cp;
        })
        .collect(Collectors.toList());

    creator.setPlatforms(platformEntities);
         
         creatorRepository.save(creator) ;
         return creator ;
        
   } 

   public Creator getCreatorDetailsByUserId(Long userId) {
    return creatorRepository.findByUserId(userId)
            .orElse(null);  
      } 
 
  
    @Transactional
    public CreatorDTO getCreatorDetailsDTO(Long userId) {
        Optional<Creator> optionalCreator = creatorRepository.findByUserId(userId);
        
        if (optionalCreator.isEmpty()) {
            throw new RuntimeException("Creator not found");
        }

        Creator creator = optionalCreator.get();

        CreatorDTO dto = new CreatorDTO();
        dto.setUserId(creator.getUserId());
        dto.setDisplayName(creator.getDisplayName());
        dto.setNiche(creator.getNiche());
        dto.setInstagram(creator.getInstagram());
        dto.setYoutube(creator.getYoutube());
        dto.setTiktok(creator.getTiktok());
        dto.setTwitter(creator.getTwitter());
        dto.setLinkedin(creator.getLinkedin());
        dto.setFacebook(creator.getFacebook());
        dto.setBio(creator.getBio());

        List<String> platformNames = creator.getPlatforms().stream()
                .map(p -> p.getPlatform())  
                .collect(Collectors.toList());

        dto.setPlatforms(platformNames);

        return dto;
    } 
    
     
     
       
}
