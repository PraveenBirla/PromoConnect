# ----------- Stage 1: Build -----------
FROM maven:3-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# ----------- Stage 2: Run -------------
FROM eclipse-temurin:17-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar demo.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "demo.jar"]
