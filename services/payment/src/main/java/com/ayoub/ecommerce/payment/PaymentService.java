package com.ayoub.ecommerce.payment;


import com.ayoub.ecommerce.notification.NotificationProducer;
import com.ayoub.ecommerce.notification.PaymentConfirmation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentService {



    private final PaymentRepository repository;
    private final PaymentMapper mapper;
    private final NotificationProducer producer;


    public Integer createPayment(PaymentRequest request) {
        log.info("payment with body <{}>", request);
        var payment= repository.save(mapper.toPayment(request));
        producer.sendNotification(
                new PaymentConfirmation(
                        request.orderReference(),
                        request.amount(),
                        request.paymentMethod(),
                        request.customer().firstname(),
                        request.customer().lastname(),
                        request.customer().email()
                )
        );
        return payment.getId();
    }

    public Boolean isPaid(Integer orderId) {
        var payment= repository.findByOrderId(orderId);
        return payment.isPresent();
    }
}
