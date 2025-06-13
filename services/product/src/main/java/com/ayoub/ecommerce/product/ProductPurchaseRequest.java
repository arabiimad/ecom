package com.ayoub.ecommerce.product;

import jakarta.validation.constraints.NotNull;

public record ProductPurchaseRequest(
       @NotNull(message = "product ID not found")
        Integer productId,
        @NotNull(message = "product quantity not found")
        double quantity
) {
}
