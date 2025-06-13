import classes from "./ProductItem.module.css";
import { Product } from "../../../types";
import Card from "../../UI/Card/Card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/redux-store";
import { cartActions } from "../../../store/cart-slice";
import Button from "../../UI/Button/Button";
import { uiActions } from "../../../store/ui-slice";

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductItem(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const addtoCartHandler = () => {
    dispatch(
      uiActions.addNotification({
        title: "item added to cart!",
        type: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.removeNotification());
    }, 1500);
    dispatch(cartActions.addItem({ ...props.product, amount: 1 }));
  };
  return (
    <Card className={classes.productContainer}>
      <div className={classes.pointer} onClick={props.onClick}>
        <img
          src={"http://localhost:8050/api/v1/images/"+cleanImagePath(props.product.image)}
          alt="product image"
          className={classes.image}
        />
        <h3>{props.product.name.slice(0, 15)}...</h3>
      </div>
      <hr />
      <p className={classes.priceRating}>
        <span className={classes.price}>${props.product.price}</span>
        <span className={classes.rating}>
          <span>quantity</span>
          <span>{props.product.availableQuantity}</span>
        </span>
      </p>
      <div className={classes.buttonContainer}>
        <Button onClick={addtoCartHandler} className={classes.red}>
          Add to Cart
        </Button>
        <Button className={classes.seeDetailsBtn} onClick={props.onClick}>
          See Details
        </Button>
      </div>
    </Card>
  );
}


function cleanImagePath(path: string): string {
  const fileName = path.split('\\\\').pop() || '';
  console.log(fileName);
  return fileName;
}
