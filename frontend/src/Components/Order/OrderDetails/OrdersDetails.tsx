import classes from "./OrderDetails.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { OrderResponse, Product } from "../../../types";

interface OrderDetailsPageProps {
  order: OrderResponse;
  paid: boolean;
  products: Product[];
}

export default function OrderDetails({ order, products, paid }: OrderDetailsPageProps) {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate(`/payment/${order.id}`);
  };

  return (
    <div className={classes.orderDetailsContainer}>
      <Card className={classes.orderCard}>
        <h2>Order Reference: {order.Reference}</h2>
        <p>Amount: ${order.amount.toFixed(2)}</p>
        <p>Payment Method: {order.paymentMethod}</p>
        <p>Status: {paid ? "Paid" : "Not Paid"}</p>
        <div className={classes.buttonContainer}>
        {!paid && (
          <Button onClick={handlePaymentClick} className={classes.paymentButton}>
            Pay Now
          </Button>
        )}
        </div>
      </Card>

      <div className={classes.productsContainer}>
        <h3>Products in this order:</h3>
        {products.map((product) => (
          <Card key={product.id} className={classes.productCard}>
            <img
              src={"http://localhost:8050/api/v1/images/"+cleanImagePath(product.image)} // Assuming `imageUrl` is a property of `Product`
              alt={product.name}
              className={classes.productImage}
            />
            <div className={classes.productDetails}>
              <h4>{product.name}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.availableQuantity}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}



function cleanImagePath(path: string): string {
  const fileName = path.split('\\\\').pop() || '';
  console.log(fileName);
  return fileName;
}