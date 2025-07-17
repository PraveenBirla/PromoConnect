package login.login.Request;

public class UserInfo {
 private String email ;
 private Long userId ; 
 private String userType;
 
 public UserInfo(String email, Long userId , String userType) {
  this.email = email;
  this.userId = userId;
   this.userType = userType;
}
 public String getUserType() {
  return userType;
}
 public void setUserType(String userType) {
  this.userType = userType;
 }
 public String getEmail() {
  return email;
 }
 public void setEmail(String email) {
  this.email = email;
 }
 public Long getUserId() {
  return userId;
 }
 public void setUserId(Long userId) {
  this.userId = userId;
 } 

}
