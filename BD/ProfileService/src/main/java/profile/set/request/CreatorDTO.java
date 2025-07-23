package profile.set.request ;
import java.util.List;



public class CreatorDTO {
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
  public String getBio() {
    return bio;
  }
  public void setBio(String bio) {
    this.bio = bio;
  }
  public List<String> getPlatforms() {
    return platforms;
  }
  public void setPlatforms(List<String> platforms) {
    this.platforms = platforms;
  }
    private Long userId;
    private String displayName;
    private String niche;
    private String instagram;
    private String youtube;
    private String tiktok;
    private String twitter;
    private String linkedin;
    private String facebook;
    private String bio;
    private List<String> platforms;  

     
}