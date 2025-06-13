package com.ayoub.ecommerce.customer;

import com.ayoub.ecommerce.authentication.AuthConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerMapper {

    private final AuthConfig auth;
    private final PasswordEncoder passwordEncoder;

    public Customer toCustomer(CustomerRequest request) {
        if(request==null) return null;
        return Customer.builder()
                .firstname(request.firstname())
                .lastname(request.lastname())
                .email(request.email())
                .address(request.address())
                .role(Role.CUSTOMER)
                .password(passwordEncoder.encode(request.password()))
                .build();

    }

    public CustomerResponse fromCustomer(Customer customer) {
        return new CustomerResponse(
                customer.getId(),
                customer.getFirstname(),
                customer.getLastname(),
                customer.getEmail(),
                customer.getAddress()
        );
    }
}
