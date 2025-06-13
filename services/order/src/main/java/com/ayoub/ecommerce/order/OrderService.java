package com.ayoub.ecommerce.order;


import com.ayoub.ecommerce.customer.CustomerClient;
import com.ayoub.ecommerce.exception.BusinessException;
import com.ayoub.ecommerce.kafka.OrderConfirmation;
import com.ayoub.ecommerce.kafka.OrderProducer;
import com.ayoub.ecommerce.orderline.OrderLineRequest;
import com.ayoub.ecommerce.orderline.OrderLineService;
import com.ayoub.ecommerce.payment.PaymentClient;
import com.ayoub.ecommerce.payment.PaymentRequest;
import com.ayoub.ecommerce.product.ProductClient;
import com.ayoub.ecommerce.product.PurchaseRequest;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final CustomerClient customerClient;
    private final ProductClient productClient;
    private final OrderRepository repository;
    private final OrderMapper mapper;
    private final OrderLineService orderLineService;
    private final OrderProducer orderProducer;
    private final PaymentClient paymentClient;

    public Integer createOrder(OrderRequest request) {

        //check if the customer exist
        var customer= this.customerClient.findCustomerById(request.customerId())
                .orElseThrow(() -> new BusinessException("cannot find customer with id " + request.customerId()));

        //purchase the products
        var purchase=this.productClient.purchaseProducts(request.products());

        //create the Order
        var order = this.repository.save(mapper.toOrder(request));

        //create the order lines
        for(PurchaseRequest purchaseRequest:request.products()){
            orderLineService.saveOrderLine(
                    new OrderLineRequest(
                            null,
                            order.getId(),
                            purchaseRequest.productId(),
                            purchaseRequest.quantity()
                    ));
        }
        //start the payment process

//        var paymentRequest = new PaymentRequest(
//          request.amount(),
//          request.paymentMethod(),
//          order.getId(),
//          order.getReference(),
//          customer
//        );
//        paymentClient.requestOrderPayment(paymentRequest);


        //send the order mail confirmation using Kafka
        orderProducer.sendOrderConfirmation(
                new OrderConfirmation(
                        request.reference(),
                        request.amount(),
                        request.paymentMethod(),
                        customer,
                        purchase
                )
        );



        return order.getId();
    }

    public List<OrderResponse> findAll() {
        return repository.findAll()
                .stream()
                .map(mapper::toOrderResponse)
                .collect(Collectors.toList());
    }

    public OrderResponse findById(Integer orderId) {
        return repository.findById(orderId)
                .map(mapper::toOrderResponse)
                .orElseThrow(()->new EntityNotFoundException("no order found with id " + orderId));
    }

    public List<OrderResponse> findByCustomerId(String customerId) {
        return repository.findAllByCustomerId(customerId)
                .stream()
                .map(mapper::toOrderResponse)
                .collect(Collectors.toList());
    }
}
