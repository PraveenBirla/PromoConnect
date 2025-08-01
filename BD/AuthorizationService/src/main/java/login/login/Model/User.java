package login.login.Model;

 
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity  
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ; 
    @Column(unique = true )
    private String email ; 

     

     

    private String password ;
    private String username ; 
    private String usertype ; 

    public String getUserType() { 
      return usertype;
    }

    public void setUserType(String usertype) {
      this.usertype = usertype;
    }

    public Long getId() {
      return id;
    }
     
    public void setId(Long id) {
      this.id = id;
    }

    public String getUsername() {
      return username;
    }   

    public void setUsername(String username) {
      this.username = username;
    }

    public String getEmail() {
      return email;
    }

    public void setEmail(String email) {
      this.email = email;
    }

    public String getPassword() {
      return password;
    }

    public void setPassword(String password) {
      this.password = password;
    }

     

}
