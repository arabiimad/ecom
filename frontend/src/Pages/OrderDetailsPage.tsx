import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getOrder, getOrderItems, getProductById } from "../Services/orderService";
import { OrderResponse, Product } from "../types";
import OrderDetails from "../Components/Order/OrderDetails/OrdersDetails";

interface LoaderData {
    order: OrderResponse;
    paid: boolean;
    products: Product[];
  }

export default function orderDetailsPage() {
    const  data = useLoaderData() as LoaderData;
    const order= data.order;
    const paid= data.paid;
    const products = data.products;



  return <OrderDetails paid={paid} order={order} products={products} />;
}

export const OrderLoader: LoaderFunction = async ({ params }) => {

    const orderId = params.orderId;
    const paid = params.Paid === 'true';
    if(!orderId){
        throw new Error("Order ID is required");
      
    }

    const order = await getOrder(parseInt(orderId, 10));
  

    if(!order){
        throw new Error("Order not found ");
    }

    const items = await getOrderItems(parseInt(orderId, 10));

  


    const products: Product[] = await Promise.all(
        items.map(async (item) => {
          const product = await getProductById(item.id);
    
    
          return {
            ...product,
            availableQuantity: item.quantity,
          };
        })
    );

    return { order, paid, products };
  
};
