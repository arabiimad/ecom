import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux-store";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Payment.module.css";
import { useNavigate } from "react-router-dom";
import { OrderResponse , PaymentRequest } from "../../types";
import { createPayment } from "../../Services/orderService";
import { uiActions } from "../../store/ui-slice";
import { restoreUser } from "../../store/auth-slice";

interface Props {
    orderId: number;
    order: OrderResponse
}

export default function PaymentPage({ orderId, order }: Props) {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardHolderName, setCardHolderName] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const { user } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (!user) {
            dispatch(restoreUser());
        }
    }, [dispatch, user])


    const handlePaymentSubmission = async () => {
        if (user && orderId == order.id) {
            try {
            
            const payment: PaymentRequest = {
               id: null,
                amount: order.amount,
                orderId: orderId,
                paymentMethod:order.paymentMethod,
                orderReference: order.Reference,
                customer: user
                  };
            await createPayment(payment);
            navigate("/orders/" + order.id + "/" + true);

            dispatch(
                uiActions.addNotification({
                  title: "payment Successful!",
                  type: "success",
                })
              );
        
              setTimeout(() => {
                dispatch(uiActions.removeNotification());
                navigate("/");
              }, 1500);

            } catch(error) {
                dispatch(
                    uiActions.addNotification({
                      title: "payment Failed!",
                      type: "error",
                    })
                  );
            
                  setTimeout(() => {
                    dispatch(uiActions.removeNotification());
                  }, 1500);
            
                  console.error("payment creation failed:", error);
            }
        }
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.center}>Payment for Order {orderId} </h1>
            <Card className={classes.paymentCard}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handlePaymentSubmission();
                }}>
                    <div className={classes.formGroup}>
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                            maxLength={16}
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="cardHolderName">Card Holder Name:</label>
                        <input
                            type="text"
                            id="cardHolderName"
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input
                            type="text"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="cvv">CVV:</label>
                        <input
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                            maxLength={3}
                            placeholder="123"
                        />
                    </div>

                    <Button type="submit" className={classes.submitBtn}>
                        Submit Payment
                    </Button>
                </form>
            </Card>
        </div>
    );
}

