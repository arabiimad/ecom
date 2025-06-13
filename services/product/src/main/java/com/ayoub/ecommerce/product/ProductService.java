package com.ayoub.ecommerce.product;


import com.ayoub.ecommerce.exception.ProductPurchaseException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.validator.internal.constraintvalidators.bv.time.pastorpresent.PastOrPresentValidatorForOffsetDateTime;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repository;
    private final ProductMapper mapper;

    public Integer createProduct(ProductRequest request) {
        var product= mapper.toProduct(request);
        return repository.save(product).getId();
    }

    public List<ProductPurchaseResponse> purchaseProducts(List<ProductPurchaseRequest> request) {
        var productsIds=request
                .stream()
                .map(ProductPurchaseRequest::productId)
                .toList();
        var storedProducts= repository.findAllByIdInOrderById(productsIds);
        if(productsIds.size()!=storedProducts.size()){
            throw new ProductPurchaseException("one or more products dont exists");
        }
        var storesRequest= request
                .stream()
                .sorted(Comparator.comparing(ProductPurchaseRequest::productId))
                .toList();

        var purchasedProducts= new ArrayList<ProductPurchaseResponse>();
        for(int i=0; i<storesRequest.size(); i++){
            var product = storedProducts.get(i);
            var productRequest= storesRequest.get(i);
            if(product.getAvailableQuantity()<productRequest.quantity()){
                throw new ProductPurchaseException("Insufficient stock quantity for product "+product.getName());
            }
            var newAvailiableQuantity=product.getAvailableQuantity()-productRequest.quantity();
            product.setAvailableQuantity(newAvailiableQuantity);
            repository.save(product);
            purchasedProducts.add(mapper
                    .toProductPurchaseResponse(product,productRequest.quantity()));
        }

        return purchasedProducts;
    }

    public ProductResponse findById(Integer productId) {
        return repository.findById(productId)
                .map(mapper::toProductResponse)
                .orElseThrow(()->
                        new EntityNotFoundException("Product not found with the id ::"+productId));
    }

    public List<ProductResponse> findAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toProductResponse)
                .collect(Collectors.toList());
    }

    public List<ProductResponse> findByCategoryId(Integer categoryId) {
        return repository.findAllByCategoryId(categoryId)
                .stream()
                .map(mapper::toProductResponse)
                .collect(Collectors.toList());
    }

    public List<ProductResponse> findByCategoryName(String name) {
        return repository.findAllByCategoryName(name)
                .stream()
                .map(mapper::toProductResponse)
                .collect(Collectors.toList());
    }
}
