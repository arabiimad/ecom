package com.ayoub.gateway.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;


@Component
public class AuthFilter extends AbstractGatewayFilterFactory<AuthFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private RestTemplate template;


    public AuthFilter(){
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())){
                if(!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION))
                {
                    throw new RuntimeException("messing authorization header");
                }

                String authHeader = exchange
                        .getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                System.out.println(authHeader);
                if(authHeader!=null && authHeader.startsWith("Bearer ")){
                    authHeader = authHeader.substring(7);
                    System.out.println(authHeader);
                    try {
                        String aa= template.getForObject("http://localhost:8090/api/v1/auth/validate?token="
                                +authHeader, String.class);
                        System.out.println(aa);
                    }catch (Exception e){
                        throw new RuntimeException("incorrect Token");
                    }
                }

            }
            return chain.filter(exchange);
        });
    }

    public static class  Config{

    }
}
