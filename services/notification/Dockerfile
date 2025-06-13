FROM openjdk:17-jdk-slim
WORKDIR /app

# Copie l’unique JAR présent dans target/ quel que soit son nom
COPY target/*.jar app.jar

ENTRYPOINT ["java","-jar","/app/app.jar"]
