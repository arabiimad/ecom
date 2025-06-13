import { LoaderFunction, useLoaderData } from "react-router-dom";
import Payment from "../Components/Payment/Payment";
import { getOrder } from "../Services/orderService";
import { OrderResponse } from "../types";

interface LoaderData {
    orderId: number;
    order: OrderResponse
  }

export default function RegistrationPage() {
    const  data = useLoaderData() as LoaderData;
    const  orderId  = data.orderId;
    const order= data.order;



  return <Payment orderId={orderId} order={order} />;
}

export const PaymentLoader: LoaderFunction = async ({ params }) => {

    const orderId = params.orderId;
    if(!orderId){
        throw new Error("Order ID is required");
      
    }

    const order = await getOrder(parseInt(orderId, 10));

    if(!order){
        throw new Error("Order not found ");
    }


    return {orderId : parseInt(orderId, 10), order }
  
};
