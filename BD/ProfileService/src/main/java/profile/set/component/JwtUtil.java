package profile.set.component;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
     private static final String SECRET = "your-256-bit-secret-your-256-bit-secret-";  
      private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());   

    private final long jwtExpirationMs = 3600000;  
  
     public JwtUtil() {
    }


    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
            .signWith(key)
            .compact();
    }  

    public String getUsernameFromToken(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build()
            .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (ExpiredJwtException  e) {
                System.out.println("Token has expired");
        } 
         catch (UnsupportedJwtException e) {
        System.out.println("Unsupported JWT token");
    } catch (MalformedJwtException e) {
        System.out.println("Malformed JWT token");
    } catch (SignatureException e) {
        System.out.println("Invalid JWT signature");
    } catch (IllegalArgumentException e) {
        System.out.println("JWT claims string is empty");
    } catch (JwtException e) {
        System.out.println("JWT error: " + e.getMessage());
    }
        return false;
    }
}
