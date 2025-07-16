 package login.login.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
     @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/user/**")  
                .allowedOrigins("https://promo-connect.vercel.app",
                 "http://localhost:5174"
                 )  
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") 
                .allowedHeaders("*")  
                .allowCredentials(true);   
    }
}
