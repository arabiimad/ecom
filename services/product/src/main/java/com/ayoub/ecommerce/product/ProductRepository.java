package com.ayoub.ecommerce.product;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Arrays;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByIdInOrderById(List<Integer> productsIds);

    List<Product> findAllByCategoryId(Integer categoryId);

    List<Product> findAllByCategoryName(String categoryId);
}
