export interface Product {
  id: number;
  name: string;
  description: string;
  availableQuantity: number;
  price: number;
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  image: string;
}

export interface CartItem extends Product {
  amount: number;
}

export interface NotificationType {
  title: string;
  type: "error" | "success";
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address?: {
    street: string;
    houseNumber: string;
    zipCode: string;
  };
}

export interface UserUpdateData {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: {
    street: string;
    houseNumber: string;
    zipCode: string;
  };
}

export interface Auth {
  email: string;
  password: string;
}

export interface Register extends Auth {
  firstname: string;
  lastname: string;
  address?: {
    street: string;
    houseNumber: string;
    zipCode: string;
  };
}

export interface AuthResponse {
  user: User;
  token: string;
}


export interface PurchaseRequest {

  id: number;
  quantity: number;
}

export interface Order {
  id: number | null ;
  reference: string;
  amount: number; 
  paymentMethod: string;
  customerId: string;
  products: PurchaseRequest[];
}

export interface OrderResponse {
  id: number | null ;
  Reference: string;
  amount: number; 
  paymentMethod: string;
  customerId: string;
}


export interface PaymentRequest {
  id: number| null;
  amount: number; 
  paymentMethod: string;
  orderId: number;
  orderReference: string;
  customer : User;
}

