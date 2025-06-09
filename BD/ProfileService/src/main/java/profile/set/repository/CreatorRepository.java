package profile.set.repository ;

 

import org.springframework.data.jpa.repository.JpaRepository;

import profile.set.model.Creator;

public interface CreatorRepository extends JpaRepository<Creator , Long> {
       
}
