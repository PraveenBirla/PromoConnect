package profile.set.repository ;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import feign.Param; 

import profile.set.model.BrandDetails;

public interface BrandDetailsRepository extends JpaRepository<BrandDetails, Long> {
       Optional<BrandDetails> findByUserId(@Param("id") Long userId);
}
