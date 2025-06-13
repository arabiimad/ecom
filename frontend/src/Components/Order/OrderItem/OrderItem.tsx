import classes from "./OrderItem.module.css";
import { OrderResponse } from "../../../types";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  order: OrderResponse;
  paid: boolean;
}

export default function OrderItem({ order, paid }: Props) {
  const navigate = useNavigate();

  const onClickPayment = () => {
    navigate(`/payment/${order.id}`);
  };

  const onClickOrder = () => {
    navigate(`/orders/${order.id}/${paid}`);
  };

  return (
    <div
      className={classes.orderContainer}
      onClick={onClickOrder}
      style={{
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer' // Ajoute un curseur de pointeur pour indiquer que c'est cliquable
      }}
    >
      <div className={classes.orderDetails}>
        <h3>Order Reference: {order.Reference}</h3>
        <p>Amount: ${order.amount.toFixed(2)}</p>
        <p>Payment Method: {order.paymentMethod}</p>
        <p>Status: {paid ? "Paid" : "Not Paid"}</p> {/* Afficher le statut de paiement */}
      </div>
      <div className={classes.buttonContainer}>
        {!paid && (
          <Button onClick={onClickPayment} className={classes.paymentButton}>
            Pay Now
          </Button>
        )}
      </div>
    </div>
  );
}
