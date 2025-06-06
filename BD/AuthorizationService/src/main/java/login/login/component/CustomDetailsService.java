package login.login.component;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;



import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import login.login.Model.User;
import login.login.Repository.UserRepository;

@Service
public class CustomDetailsService implements UserDetailsService {
     
      private UserRepository userRepository ; 

      public   CustomDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }    

    @Override
    public UserDetails loadUserByUsername(String email)  throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email) 
        .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + email));
     
 
    return new org.springframework.security.core.userdetails.User(
                user.getEmail(),                  
                user.getPassword(),              
                mapRolesToAuthorities(user.getRoles()) 
        );
} 

  private Collection<SimpleGrantedAuthority> mapRolesToAuthorities(Set<String> roles) {
        return roles.stream()
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
    }

}  

 