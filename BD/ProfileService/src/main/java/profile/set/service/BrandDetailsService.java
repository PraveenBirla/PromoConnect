package profile.set.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired ;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import profile.set.model.BrandDetails;
import profile.set.repository.BrandDetailsRepository;
import profile.set.request.BrandDTO;
import profile.set.request.BrandDetailsRequest;

@Service
public class BrandDetailsService {

    @Autowired
    private BrandDetailsRepository brandDetailsRepository;

    

    public BrandDetails saveBrandDetails(BrandDetailsRequest request, Long userId) {
        
        BrandDetails brand = brandDetailsRepository.findByUserId(userId)
                .orElse(new BrandDetails());
    
        brand.setUserId(userId);
        brand.setCompanyName(request.getCompanyName());
        brand.setWebsite(request.getWebsite());
        brand.setDescription(request.getDescription());
        brand.setIndustry(request.getIndustry());
        brand.setCompanySize(request.getCompanySize());
        brand.setContactPerson(request.getContactPerson());
        brand.setPosition(request.getPosition());
        brand.setEmail(request.getEmail());
        brand.setLocation(request.getLocation());
    
        return brandDetailsRepository.save(brand);
    } 
     
     @Transactional
     public List<BrandDTO> getAllBrands(){ 
         List<BrandDetails> brands = brandDetailsRepository.findAll();
        
         return brands.stream().map(brand -> {
             BrandDTO dto = new BrandDTO();
             dto.setUserId(brand.getUserId());
             dto.setCompanyName(brand.getCompanyName());
             dto.setWebsite(brand.getWebsite());
             dto.setDescription(brand.getDescription());
             dto.setCompanySize(brand.getCompanySize());
             dto.setContactPerson(brand.getContactPerson());
             dto.setPosition(brand.getPosition());
             dto.setEmail(brand.getEmail());
             dto.setLocation(brand.getLocation()); 
             dto.setIndustry(brand.getIndustry());
             return dto;
         }).collect(Collectors.toList());
    }
}
