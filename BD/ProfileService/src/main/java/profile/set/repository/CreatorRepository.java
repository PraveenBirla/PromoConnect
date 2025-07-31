package profile.set.repository ;
import java.util.Optional;
import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import feign.Param;
import profile.set.model.Creator;
                                    
@Repository
public interface CreatorRepository extends JpaRepository<Creator , Long> {
          Optional<Creator> findByUserId(@Param("id") Long userId);
          
          @Query("SELECT c FROM Creator c LEFT JOIN FETCH c.platforms")
          List<Creator> findAllWithPlatforms();
}
