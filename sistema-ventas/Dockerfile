# BUILD STAGE
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# RUN STAGE
FROM openjdk:17-jdk-slim
WORKDIR /app
EXPOSE 8080
ARG  JAR_FILE=target/*.jar
COPY --from=build /app/${JAR_FILE} facturacion-electronica.jar
CMD ["java", "-jar", "facturacion-electronica.jar"]

