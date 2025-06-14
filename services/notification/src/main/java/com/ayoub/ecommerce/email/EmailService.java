package com.ayoub.ecommerce.email;


import com.ayoub.ecommerce.kafka.order.Product;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.ayoub.ecommerce.email.EmailTemplates.ORDER_CONFIRMATION;
import static com.ayoub.ecommerce.email.EmailTemplates.PAYMENT_CONFIRMATION;
import static java.nio.charset.StandardCharsets.UTF_8;
import static org.springframework.mail.javamail.MimeMessageHelper.MULTIPART_MODE_RELATED;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;
    private  final SpringTemplateEngine templateEngine;

    @Async
    public void sendPaymentEmail(String destinationEmail,
                          String CustomerName,
                          BigDecimal amount,
                          String orderReference) throws MessagingException {

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(
                mimeMessage,MULTIPART_MODE_RELATED,UTF_8.name());

        messageHelper.setFrom("contact@ayoub.com");
        final String templateName = PAYMENT_CONFIRMATION.getTemplate();

        Map<String, Object> variables = new HashMap<>();
        variables.put("CustomerName", CustomerName);
        variables.put("amount", amount);
        variables.put("orderReference", orderReference);

        Context context= new Context();
        context.setVariables(variables);
        messageHelper.setSubject(PAYMENT_CONFIRMATION.getSubject());

        try {
            log.info("Attempting to process template: {}", templateName);
            String htmlTemplate = templateEngine.process(templateName, context);
            messageHelper.setText(htmlTemplate, true);
            messageHelper.setTo(destinationEmail);
            mailSender.send(mimeMessage);
            log.info(String.format("INFO: Email successfully sent to %s with template %s.", destinationEmail, templateName));
        } catch (MessagingException e) {
            log.error("ERROR: cannot send the message to {}", destinationEmail, e);
        } catch (Exception e) {
            log.error("ERROR: unexpected error while processing template {}", templateName, e);
        }

    }

    @Async
    public void sendOrderEmail(String destinationEmail,
                          String CustomerName,
                          BigDecimal amount,
                          String orderReference,
                               List<Product> products
    ) throws MessagingException {

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(
                mimeMessage,MULTIPART_MODE_RELATED,UTF_8.name());

        messageHelper.setFrom("contact@ayoub.com");
        final String templateName = ORDER_CONFIRMATION.getTemplate();

        Map<String, Object> variables = new HashMap<>();
        variables.put("CustomerName", CustomerName);
        variables.put("TotalAmount", amount);
        variables.put("orderReference", orderReference);
        variables.put("products",products);

        Context context= new Context();
        context.setVariables(variables);
        messageHelper.setSubject(ORDER_CONFIRMATION.getSubject());

        try {
            String htmlTemplate = templateEngine.process(templateName, context);
            messageHelper.setText(htmlTemplate, true);
            messageHelper.setTo(destinationEmail);
            mailSender.send(mimeMessage);
            log.info(String.format("INFO: Email successfully dent to %s with template %s.",destinationEmail,templateName));
        } catch (MessagingException e){
            log.warn("WARNING: cannot send the message to {}",destinationEmail);
        }

    }
}
