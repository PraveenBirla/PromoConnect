package profile.set.service; 
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.set.model.Creator;
import profile.set.repository.CreatorRepository;
import profile.set.request.CreatorDTO;
import org.springframework.transaction.annotation.Transactional;
@Service
public class CreatorService {
  private final   CreatorRepository creatorRepository;

    @Autowired
    public CreatorService(CreatorRepository creatorRepository) {
        this.creatorRepository = creatorRepository;
    }
     
    @Transactional
    public List<CreatorDTO> getAllCreators() {
         List<Creator> creators = creatorRepository.findAllWithPlatforms();

    return creators.stream().map(creator -> {
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
        .map(platform -> platform.getPlatform())
        .collect(Collectors.toList());

    dto.setPlatforms(platformNames);
    return dto;
}).collect(Collectors.toList());  

    }
}
