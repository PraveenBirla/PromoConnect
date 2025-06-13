package profile.set.repository ;

 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import profile.set.model.Creator;

@Repository
public interface CreatorRepository extends JpaRepository<Creator , Long> {
       
}
