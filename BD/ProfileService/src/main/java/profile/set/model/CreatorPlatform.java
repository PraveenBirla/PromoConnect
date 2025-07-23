package  profile.set.model ;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "creator_platforms")
public class CreatorPlatform {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  id;

    private String platform;

    @ManyToOne
    @JoinColumn(name = "creator_user_id", referencedColumnName = "userId")
    private Creator creator;

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public String getPlatform() {
      return platform;
    }

    public void setPlatform(String platform) {
      this.platform = platform;
    }

    public Creator getCreator() {
      return creator;
    }

    public void setCreator(Creator creator) {
      this.creator = creator;
    }
 
     
}
