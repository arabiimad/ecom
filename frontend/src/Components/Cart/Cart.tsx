import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux-store";
import Card from "../UI/Card/Card";
import SingleCartItem from "./CartItem/CartItem";
import Button from "../UI/Button/Button";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import { Order } from "../../types";
import { useEffect } from "react";
import { restoreUser } from "../../store/auth-slice";
import { createOrder } from "../../Services/orderService";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const NumOfItems = useSelector(
    (state: RootState) => state.cart.totalNumItems
  );

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user) {
      dispatch(restoreUser());
    }
  }, [dispatch, user]);



  const orderHandler = async () => {
    if(user){
    try {
      const order: Order = {
        id: null,
        reference: "ORD-" + Date.now(), // Génération d'une référence simple
        amount: parseFloat(totalAmount.toFixed(2)),
        customerId: user.id,
        paymentMethod: "MASTER_CARD",
        products: cartItems.map(item => ({
          id: item.id,
          quantity: item.amount,
        })),
      };

      const orderId = await createOrder(order);
      
      navigate(`/payment/${orderId}`);

      dispatch(cartActions.clearCart());

      dispatch(
        uiActions.addNotification({
          title: "Order Successful!",
          type: "success",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.removeNotification());
        // Vous pouvez rediriger l'utilisateur vers une page de confirmation de commande ici
      }, 1500);
    } catch (error) {
      dispatch(
        uiActions.addNotification({
          title: "Order Failed!",
          type: "error",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 1500);

      console.error("Order creation failed:", error);
    }
  }else{
    navigate("/auth");
  }

  
  
  };

  const clearCartHandler = () => {
    dispatch(
      uiActions.addNotification({
        title: "Cart Empty!",
        type: "error",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.removeNotification());
    }, 1500);
    dispatch(cartActions.clearCart());
  };
  return (
    <>
      {cartItems.length > 0 && (
        <div className={classes.container}>
          <h1 className={classes.center}>
            Your <span className={classes.red}>Cart</span>
          </h1>
          <div className={classes.cartDetails}>
            <div className={classes.items}>
              {cartItems.map((item) => (
                <SingleCartItem item={item} key={item.id} />
              ))}
            </div>
            <Card className={`${classes.ItemSummary} ${classes.center}`}>
              <h2 className={classes.summaryHeading}>
                Cart <span className={classes.summary}>Summary</span>
              </h2>
              <hr />
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
              <p>Total Number of Items: {NumOfItems}</p>
              <Button onClick={orderHandler} className={classes.checkoutBtn}>
                Checkout?
              </Button>
            </Card>
          </div>
          <p className={classes.center}>
            <Button onClick={clearCartHandler} className={classes.clear}>
              Clear Cart
            </Button>
          </p>
          <BrowseCategory title="Browse More Products" />
        </div>
      )}
      {cartItems.length === 0 && (
        <div className={`${classes.container} ${classes.empty}`}>
          <div className={classes.center}>
            <h1>
              Your Cart is <span className={classes.red}>Empty</span>
            </h1>
            <p>Please add some items to continue</p>
          </div>
          <BrowseCategory title="Browse Products" />
        </div>
      )}
    </>
  );
}
