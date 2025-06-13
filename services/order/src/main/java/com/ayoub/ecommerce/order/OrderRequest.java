package com.ayoub.ecommerce.order;

import com.ayoub.ecommerce.product.PurchaseRequest;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;
import java.util.List;

public record OrderRequest(
        Integer id,
        String reference,
        @Positive(message="order amount should be positive")
        BigDecimal amount,
        @NotNull(message = "order payment method should not be empty")
        PaymentMethod paymentMethod,
        @NotEmpty(message = "customer should be present")
        @NotNull(message = "customer should be present")
        @NotBlank(message = "customer should be present")
        String customerId,

        @NotEmpty(message = "you should at least purchase one product")
        List<PurchaseRequest> products
) {
}
