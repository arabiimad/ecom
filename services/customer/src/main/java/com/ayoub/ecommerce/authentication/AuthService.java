package com.ayoub.ecommerce.authentication;


import com.ayoub.ecommerce.customer.*;
import jakarta.ws.rs.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final CustomerRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CustomerMapper mapper;

    public AuthenticationResponse register(CustomerRequest request) {
        var user = Customer.builder()
                .firstname(request.firstname())
                .lastname(request.lastname())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(Role.CUSTOMER)
                .address(request.address())
                .build();
        var savedUser = repository.save(user);
        Customer customer = repository.findByEmail(request.email()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("userId", customer.getId());
        extraClaims.put("role", customer.getRole().name());
        var jwtToken = jwtService.generateToken(extraClaims,user);
        return AuthenticationResponse.builder()
                .Token(jwtToken)
                .user(mapper.fromCustomer(customer))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request)  {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("userId", user.getId());
        extraClaims.put("role", user.getRole().name());
        var jwtToken = jwtService.generateToken(extraClaims,user);
        log.info("jwt token is {}",jwtToken);
        return AuthenticationResponse.builder()
                .Token(jwtToken)
                .user(mapper.fromCustomer(user))
                .build();
    }


    public String validateToken(String token) {

       return jwtService.validateToken(token);

    }

    public CustomerResponse getCustomerByToken(String token) {

        String userId= jwtService.getUserByToken(token);
        Customer user= repository.findById(userId).orElseThrow();
        return mapper.fromCustomer(user);
    }
}
