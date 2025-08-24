package profile.set.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="creator_detail")
public class Creator {
     
  @Id 
  Long userId ;
  
  private String  displayName ;
  
  private String niche ;

 @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<CreatorPlatform>  platforms ;
  
  private String instagram ;
  private String youtube;
  private String tiktok; 
  private String twitter;
  private String linkedin;
  private String facebook;   
  private String bio;
  public String getBio() {  
    return bio;
  }
  public void setBio(String bio) {
    this.bio = bio;
  }
  public Long getUserId() {
    return userId;
  }
  public void setUserId(Long userId) {
    this.userId = userId;
  }
  public String getDisplayName() {
    return displayName;
  }
  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }
  public String getNiche() {
    return niche; 
  }
  public void setNiche(String niche) {
    this.niche = niche;
  }
  public List<CreatorPlatform> getPlatforms() {
    return platforms;
  }
  public void setPlatforms(List<CreatorPlatform> platforms) {
    this.platforms = platforms;
  }
  public String getInstagram() {
    return instagram;
  }
  public void setInstagram(String instagram) {
    this.instagram = instagram;
  }
  public String getYoutube() {
    return youtube;
  }
  public void setYoutube(String youtube) {
    this.youtube = youtube;
  }
  public String getTiktok() {
    return tiktok;
  }
  public void setTiktok(String tiktok) {
    this.tiktok = tiktok;
  }
  public String getTwitter() {
    return twitter;
  }
  public void setTwitter(String twitter) {
    this.twitter = twitter;
  }
  public String getLinkedin() {
    return linkedin; 
  }
  public void setLinkedin(String linkedin) {
    this.linkedin = linkedin;
  }
  public String getFacebook() {
    return facebook;
  }
  public void setFacebook(String facebook) {
    this.facebook = facebook;
  } 

    
}
