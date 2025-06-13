package com.ayoub.gateway.security;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
@Slf4j
public class RouteValidator {
    public static final List<String> openApiEndPoints = List.of(
            "/eureka",
            "/api/v1/auth/register",
            "/api/v1/auth/authenticate",
            "/api/v1/products"

    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> {
                boolean isSecured = openApiEndPoints
                        .stream()
                        .noneMatch(uri -> request.getURI().getPath().contains(uri));
                log.info("Request Path: {} - isSecured: {}", request.getURI().getPath(), isSecured);
                return isSecured;
            };
}