package profile.set;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class SetApplicationTests {
   
   @BeforeAll 
    static void loadEnv() {
        Dotenv dotenv = Dotenv.configure()
                              .ignoreIfMissing()
                              .load();

        String aivenPassword = dotenv.get("AIVEN_PASSWORD");
        if (aivenPassword != null) {
            System.setProperty("AIVEN_PASSWORD", aivenPassword);
        } else {
            System.err.println("❌ AIVEN_PASSWORD not found in .env file");
        }
    }

    @Test
    void contextLoads() {
         
    }


}
