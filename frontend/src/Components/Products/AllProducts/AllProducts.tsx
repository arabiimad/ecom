import { useNavigate } from "react-router-dom";
import { Product } from "../../../types";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductItem from "../ProductItem/ProductItem";
import BrowseCategory from "../../BrowseCategory/BrowseCategory";
import { ChangeEvent, useState } from "react";
import classes from "./AllProducts.module.css";

interface Props {
  data: Product[];
}

export default function AllProducts(props: Props) {
  const [filter, setFilter] = useState<string>("none");

  const filterChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };
  const data = props.data ?? [];
  let sorted: Product[] = [...data];
  switch (filter) {
    case "PLTH":
      sorted = [...data].sort((a, b) => a.price - b.price);
      break;
    case "PHTL":
      sorted = [...data].sort((a, b) => b.price - a.price);
      break;
    case `RLTH`:
      sorted = [...data].sort((a, b) => a.availableQuantity - b.availableQuantity);
      break;
    case `RHTL`:
      sorted = [...data].sort((a, b) => b.availableQuantity - a.availableQuantity);
      break;
    default:
      sorted = [...data].sort(() => 0.5 - Math.random());
  }

  const products = sorted;

  const navigate = useNavigate();

  return (
    <div>
      <h1 className={classes.heading}>All Products</h1>
      <div className={classes.filter}>
        <label htmlFor="filter" className={classes.label}>
          Filter
        </label>
        <select
          name="filter"
          className={classes.select}
          id="filter"
          value={filter}
          onChange={filterChangeHandler}
        >
          <option value="none">none</option>
          <option value="PLTH">Price: Low to High</option>
          <option value="PHTL">Price: High to Low</option>
          <option value="RLTH">quantity: Low to High</option>
          <option value="RHTL">quantity: High to Low</option>
        </select>
      </div>
      <ProductContainer>
        {products.map((item) => (
          <ProductItem
            onClick={() =>
              navigate(`/shop/category/${item.categoryName}/${item.id}`)
            }
            key={item.id}
            product={item}
          />
        ))}
      </ProductContainer>
      <BrowseCategory title="Browse By Category" />
    </div>
  );
}
