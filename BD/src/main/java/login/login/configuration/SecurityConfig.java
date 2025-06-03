package login.login.configuration ;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import login.login.component.JwtUtil;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
 

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
     JwtUtil jwtUtil() {
        return new JwtUtil();
    } 

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth.requestMatchers("/user/signup" , "/user/login").permitAll().
            anyRequest().authenticated())  
            .csrf(csrf -> csrf.disable());  
        return http.build();
    }

    
} 