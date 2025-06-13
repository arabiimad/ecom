package com.ayoub.ecommerce.kafka;


import com.ayoub.ecommerce.email.EmailService;
import com.ayoub.ecommerce.kafka.order.Customer;
import com.ayoub.ecommerce.kafka.order.OrderConfirmation;
import com.ayoub.ecommerce.kafka.payment.PaymentConfirmation;
import com.ayoub.ecommerce.notification.Notification;
import com.ayoub.ecommerce.notification.NotificationRepository;
import com.ayoub.ecommerce.notification.NotificationType;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationConsumer {

    private final NotificationRepository repository;
    private final EmailService emailService;


    @KafkaListener(topics = "payment-topic")
    public void consumeOrderNotification(PaymentConfirmation paymentConfirmation) throws MessagingException {
        log.info(String.format("consuming the message from order topic :: %s",paymentConfirmation));
        repository.save(Notification.builder()
                .type(NotificationType.PAYMENT_CONFIRMATION)
                .notificationDate(LocalDateTime.now())
                .paymentConfirmation(paymentConfirmation)
                .build()
        );

        var customerName= paymentConfirmation.customerFirstName()
                +" "+paymentConfirmation.customerLastName();
        emailService.sendPaymentEmail(
                paymentConfirmation.customerEmail(),
                customerName,
                paymentConfirmation.amount(),
                paymentConfirmation.orderReference()

        );

    }

    @KafkaListener(topics = "order-topic")
    public void consumeOrderNotification(OrderConfirmation orderConfirmation) throws MessagingException {
        log.info(String.format("consuming the message from order topic :: %s",orderConfirmation));
        repository.save(Notification.builder()
                .type(NotificationType.ORDER_CONFIRMATION)
                .notificationDate(LocalDateTime.now())
                .orderConfirmation(orderConfirmation)
                .build()
        );

        var customerName= orderConfirmation.customer().firstname()
                +" "+orderConfirmation.customer().lastname();
        emailService.sendOrderEmail(
                orderConfirmation.customer().email(),
                customerName,
                orderConfirmation.totalAmount(),
                orderConfirmation.orderReference(),
                orderConfirmation.products()

        );

    }
}
