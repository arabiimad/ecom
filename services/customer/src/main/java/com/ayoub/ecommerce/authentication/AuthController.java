package com.ayoub.ecommerce.authentication;


import com.ayoub.ecommerce.customer.Customer;
import com.ayoub.ecommerce.customer.CustomerRepository;
import com.ayoub.ecommerce.customer.CustomerRequest;
import com.ayoub.ecommerce.customer.CustomerResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;



@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor

public class AuthController {
    private final CustomerRepository repository;
    private final AuthService service;


    @PostMapping("/register")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customer added"),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody CustomerRequest request
    ) {

        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Authentication succeeded"),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/validate")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "valid token"),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<String> authenticate(
            @RequestParam("token") String token
    ) {

        return ResponseEntity.ok(service.validateToken(token));
    }

    @GetMapping("/token")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "valid token"),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<CustomerResponse> userByToken(
            @RequestParam("token") String token
    ) {

        return ResponseEntity.ok(service.getCustomerByToken(token));
    }


}
