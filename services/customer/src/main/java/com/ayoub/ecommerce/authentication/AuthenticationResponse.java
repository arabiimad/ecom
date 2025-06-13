package com.ayoub.ecommerce.authentication;

import com.ayoub.ecommerce.customer.Customer;
import com.ayoub.ecommerce.customer.CustomerResponse;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private CustomerResponse user;
    private String Token;

}