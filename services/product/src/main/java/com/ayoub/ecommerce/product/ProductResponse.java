package com.ayoub.ecommerce.product;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Builder;

import java.math.BigDecimal;

public record ProductResponse(
        Integer id,

        String name,

        String description,

        double availableQuantity,

        BigDecimal price,

        Integer categoryId,

        String categoryName,

        String categoryDescription,

        String image
) {

}
