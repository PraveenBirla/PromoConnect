package profile.set.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "brand_details")
 
public class BrandDetails {
  
    @Id
    private Long userId;  

    private String companyName;
    private String website;
    private String description;
    private String industry;
    private String companySize;
    private String contactPerson;
    private String position;
    private String email;
    private String location; 
    public Long getUserId() {
      return userId;
    }
    public void setUserId(Long userId) {
      this.userId = userId;
    }
    public String getCompanyName() {
      return companyName;
    }
    public void setCompanyName(String companyName) {
      this.companyName = companyName;
    }
    public String getWebsite() {
      return website;
    }
    public void setWebsite(String website) {
      this.website = website;
    }
    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      this.description = description;
    }
    public String getIndustry() {
      return industry;
    }
    public void setIndustry(String industry) {
      this.industry = industry;
    }
    public String getCompanySize() {
      return companySize;
    }
    public void setCompanySize(String companySize) {
      this.companySize = companySize;
    }
    public String getContactPerson() {
      return contactPerson;
    }
    public void setContactPerson(String contactPerson) {
      this.contactPerson = contactPerson;
    }
    public String getPosition() {
      return position;
    }
    public void setPosition(String position) {
      this.position = position;
    }
    public String getEmail() {
      return email;
    }
    public void setEmail(String email) {
      this.email = email;
    }
    public String getLocation() {
      return location;
    }
    public void setLocation(String location) {
      this.location = location;
    }
}
