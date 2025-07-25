package profile.set;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import io.github.cdimascio.dotenv.Dotenv;

@EnableFeignClients
@SpringBootApplication 
public class SetApplication {

	public static void main(String[] args) {   

		 Dotenv dotenv = Dotenv.configure()
                              .ignoreIfMissing()  
                              .load();
      String aivenPassword = dotenv.get("AIVEN_PASSWORD");

			  if (aivenPassword != null) {
            System.setProperty("AIVEN_PASSWORD", aivenPassword);
        } else { 
            System.err.println("⚠️ AIVEN_PASSWORD not found in .env file");
        } 

				
		SpringApplication.run(SetApplication.class, args);
	}

}
