import {
  Order,
  OrderResponse,
  PurchaseRequest,
  PaymentRequest,
  Product,
} from '../types';
import { http } from './httpClient';

export const createOrder = (order: Order) =>
  http<number>('/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });

export const getOrder = (orderId: number) =>
  http<OrderResponse>(`/orders/${orderId}`);

export const getUserOrder = (userId: string) =>
  http<OrderResponse[]>(`/orders/user/${userId}`);

export const getOrderItems = (orderId: number) =>
  http<PurchaseRequest[]>(`/order-lines/order/${orderId}`);

export const isPaid = (orderId: number) => http<boolean>(`/payments/${orderId}`);

export const createPayment = (payment: PaymentRequest) =>
  http<number>('/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payment),
  });

export const getProductById = (productId: number) =>
  http<Product>(`/products/${productId}`);
