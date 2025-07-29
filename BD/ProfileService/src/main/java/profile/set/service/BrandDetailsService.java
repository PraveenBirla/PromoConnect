package profile.set.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.set.model.BrandDetails;
import profile.set.repository.BrandDetailsRepository;
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
}
