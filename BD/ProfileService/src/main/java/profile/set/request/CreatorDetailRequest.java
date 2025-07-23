package  profile.set.request ;

import java.util.List;

import jakarta.persistence.ElementCollection;

public class CreatorDetailRequest {
      
    private String  displayName ;
  
  private String niche ; 

  @ElementCollection 
  private List<String>  platforms ;
  private String bio ; 
  public String getBio() {
    return bio;
  }
  public void setBio(String bio) {
    this.bio = bio;
  }
  private String instagram ; 
  private String youtube;
  private String tiktok;
  private String twitter;
  private String linkedin;
  private String facebook;
  
  
  public String getDisplayName() {
    return displayName;
  }
  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }
  public String getNiche() {
    return niche;
  }
  public void setNich(String niche) {
    this.niche = niche;
  }
  public List<String> getPlatforms() {
    return platforms;
  }
  public void setPlatforms(List<String> platforms) {
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
