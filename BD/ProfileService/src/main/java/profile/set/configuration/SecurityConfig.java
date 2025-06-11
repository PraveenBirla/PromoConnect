package profile.set.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import profile.set.component.BearerTokenExistenceFilter; 
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource ;
import java.util.Arrays ;
import org.springframework.web.cors.CorsConfiguration ; 
@Configuration
@EnableWebSecurity
public class SecurityConfig {
      
    @Bean 
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http 
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
             .csrf(csrf -> csrf.disable()) 
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated() 
            )
            .addFilterBefore(new BearerTokenExistenceFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build(); 
      } 

        @Bean
      public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        
        config.setAllowedOrigins(Arrays.asList("http://localhost:5173"));  
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);  

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }
}
