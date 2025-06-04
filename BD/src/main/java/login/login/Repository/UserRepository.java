package login.login.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import login.login.Model.User;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByEmail(String email);
  
    Optional<User> findByEmail(String email);

    
       
    
 }  
