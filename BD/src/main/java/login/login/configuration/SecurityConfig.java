package login.login.configuration ;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import login.login.component.JwtUtil;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import login.login.component.JwtAuthenticationFilter;

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
    public SecurityFilterChain securityFilterChain(HttpSecurity http ,
      JwtAuthenticationFilter jwtFilter) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth.requestMatchers("/user/signup" , "/user/login").permitAll().
            anyRequest().authenticated())  
            .csrf(csrf -> csrf.disable())  
              .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))   
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build(); 

    }

    
} 