import {
  Params,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import classes from "./ProductDescription.module.css";
import { Product } from "../../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/redux-store";
import { cartActions } from "../../../store/cart-slice";
import { useState } from "react";
import QtyForm from "../../UI/QtyForm/QtyForm";
import Button from "../../UI/Button/Button";
import { uiActions } from "../../../store/ui-slice";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductDescription() {
  const [qty, setQty] = useState<number>(1);
  const params = useParams<Params>();
  const productId = Number(params.productId);
  const dispatch = useDispatch<AppDispatch>();
  const data = useLoaderData() as Product[];
  const products = data.filter((item: Product) => item.id === productId);
  if (products.length === 0) {
    throw new Error("Invalid Id of product");
  }
  const product = products[0];

  const otherProducts: Product[] = data.filter((item) => item.id !== productId);
  const navigate = useNavigate();


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
    dispatch(cartActions.addItem({ ...product, amount: qty }));
  };
 
  const increaseQty = () => {
    if (qty === 10) {
      return;
    }
    setQty((qty) => qty + 1);
    product.availableQuantity--;
  };

  const decreaseQty = () => {
    if (qty === 1) {
      return;
    }
    setQty((qty) => qty - 1);
    product.availableQuantity++;
  };

  function cleanImagePath(path: string): string {
    const fileName = path.split('\\\\').pop() || '';
    console.log(fileName);
    return fileName;
  }

  return (
    <div>
      <div className={classes.Itemcontainer}>
        <div className={classes.imageContainer}>
          <img
            src={"http://localhost:8050/api/v1/images/"+cleanImagePath(product.image)}
            alt="product Image"
            className={classes.image}
          />
        </div>
        <div className={classes.details}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            Available Quatity :{product.availableQuantity-1} 
          </p>
          <div>
            <QtyForm
              qty={qty}
              setQty={setQty}
              decreaseQty={decreaseQty}
              increaseQty={increaseQty}
            />
            <Button onClick={addtoCartHandler} className={classes.red}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.moreItems}>
        <h2>
          Check out other products in{" "}
          <span className={classes.capitalize}>{product.categoryName}</span>
        </h2>
        <div className={classes.moreContainer}>
          {otherProducts.map((item, index) => {
            return (
              <ProductItem
                key={index}
                product={item}
                onClick={() =>
                  navigate(`/shop/category/${item.categoryName}/${item.id}`)
                }
              ></ProductItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
