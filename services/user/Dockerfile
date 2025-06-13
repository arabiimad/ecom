FROM openjdk:17-jdk-slim
WORKDIR /app
ARG JAR_FILE=target/*.jar
COPY  app.jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
