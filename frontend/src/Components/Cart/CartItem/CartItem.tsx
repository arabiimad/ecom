import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../types";
import Card from "../../UI/Card/Card";
import QtyForm from "../../UI/QtyForm/QtyForm";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/redux-store";
import { cartActions } from "../../../store/cart-slice";
import RedBtn from "../../UI/Button/Button";
import { uiActions } from "../../../store/ui-slice";

interface Props {
  item: CartItem;
}

export default function SingleCartItem({ item }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const deleteFromCartHandler = () => {
    dispatch(
      uiActions.addNotification({
        title: "Removed Item from cart!",
        type: "error",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.removeNotification());
    }, 1500);
    dispatch(cartActions.deleteFromCart(item));
  };

  return (
    <Card className={classes.itemContainer}>
      <img
        src={"http://localhost:8050/api/v1/images/" + cleanImagePath(item.image)}
        alt="item image"
        className={classes.image}
        onClick={() => navigate(`/shop/category/${item.categoryName}/${item.id}`)}
      />
      <div className={classes.detailsContainer}>
        <h2
          className={classes.itemTitle}
          onClick={() => navigate(`/shop/category/${item.categoryName}/${item.id}`)}
        >
          {item.name}
        </h2>
        <p>
          ${item.price.toFixed(2)} * {item.amount} = $
          {(item.price * item.amount).toFixed(2)}
        </p>
        <p>Available Quantity: {item.availableQuantity}</p>
        <QtyForm cartItem={{ ...item, amount: 1 }}>
          <RedBtn className={classes.delBtn} onClick={deleteFromCartHandler}>
            Delete
          </RedBtn>
        </QtyForm>
      </div>
    </Card>
  );
}

function cleanImagePath(path: string): string {
  const fileName = path.split('\\\\').pop() || '';
  return fileName;
}
