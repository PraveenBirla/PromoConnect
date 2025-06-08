
package profile.set.Model;

@Entity
@Table(name="CreatorsDetail")
public class Creator {
     
  @Column(unique=true)
  Long id ;
   
  private String  displayName ;
  
  private String nich ;
  @ElementCollection 

  private List<String>  platforms ;
  
  private String instagram ;
  private String youtube;
  private String tiktok;
  private String twitter;
  private String linkedin;
  private String facebook; 

    
}
