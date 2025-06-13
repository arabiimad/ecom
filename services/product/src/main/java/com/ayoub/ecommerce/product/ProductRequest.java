package com.ayoub.ecommerce.product;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record ProductRequest(
         Integer id,

         @NotNull(message = "product name is required")
         String name,
         @NotNull(message = "product description is required")
        String description,
         @Positive(message = "product quantity should be positive")
        double availableQuantity,
         @Positive(message = "product price should be positive")
        BigDecimal price,
         @NotNull(message = "product category is required")
         Integer categoryId,
         @NotNull(message = "product image is required")
         String image
) {
}
