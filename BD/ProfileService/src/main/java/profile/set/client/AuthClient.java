package profile.set.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import profile.set.request.UserInfo;

@FeignClient(name = "auth-service", url = "https://promoconnect-fsk5.onrender.com")
public interface AuthClient {
     
@PostMapping("/user/extract-user")
UserInfo extractUserInfo(@RequestHeader("Authorization") String token);
     
}
