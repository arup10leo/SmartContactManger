FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/smart2contact-0.0.1-SNAPSHOT.jar /app/smart2contact-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT [ "java","-jar","smart2contact-0.0.1-SNAPSHOT.jar" ]