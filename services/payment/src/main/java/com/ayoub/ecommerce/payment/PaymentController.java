package com.ayoub.ecommerce.payment;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService service;

    @PostMapping
    public ResponseEntity<Integer> createPayment(
            @RequestBody @Valid PaymentRequest request
    ){
        return ResponseEntity.ok(service.createPayment(request));
    }


    @GetMapping("/{order-id}")
    public ResponseEntity<Boolean> checkPayment(
            @PathVariable("order-id") Integer orderId
    ){
        return ResponseEntity.ok(service.isPaid(orderId));
    }

}
