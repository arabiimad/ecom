package com.ayoub.ecommerce.customer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record CustomerUpdateRequest(
        String id,
        @NotNull(message = "customer firstname is required")
        String firstname,

        @NotNull(message = "customer lastname is required")
        String lastname,


        @Email(message = "invalid email address")
        String email,


        Address address
) {
}
