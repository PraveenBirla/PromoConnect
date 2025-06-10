package profile.set;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class SetApplication {

	public static void main(String[] args) {
		SpringApplication.run(SetApplication.class, args);
	}

}
