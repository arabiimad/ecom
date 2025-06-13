import { useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "../../../types";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./CategoryProducts.module.css";
import { ChangeEvent, useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";

export default function Products() {
  const { data, category } = useLoaderData() as {
    data: Product[];
    category: string;
  };
  const [filter, setFilter] = useState<string>("none");

  const filterChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };
  const dataset = data ?? [];
  let sorted: Product[] = [...dataset];
  switch (filter) {
    case "PLTH":
      sorted = [...dataset].sort((a, b) => a.price - b.price);
      break;
    case "PHTL":
      sorted = [...dataset].sort((a, b) => b.price - a.price);
      break;
    case `RLTH`:
      sorted = [...dataset].sort((a, b) => a.availableQuantity - b.availableQuantity);
      break;
    case `RHTL`:
      sorted = [...dataset].sort((a, b) => b.availableQuantity - a.availableQuantity);
      break;
    default:
      sorted = [...dataset].sort(() => 0.5 - Math.random());
  }
  const products = sorted;

  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>{category}</h1>
      <div className={classes.filter}>
        <label htmlFor="filter" className={classes.label}>
          Filter
        </label>
        <select
          name="filter"
          id="filter"
          className={classes.select}
          value={filter}
          onChange={filterChangeHandler}
        >
          <option value="none">none</option>
          <option value="PLTH">Price: Low to High</option>
          <option value="PHTL">Price: High to Low</option>
          <option value="RLTH">Rating: Low to High</option>
          <option value="RHTL">Rating: High to Low</option>
        </select>
      </div>
      <ProductContainer>
        {products.map((item) => (
          <ProductItem
            onClick={() => navigate(`/shop/category/${category}/${item.id}`)}
            key={item.id}
            product={item}
          />
        ))}
      </ProductContainer>
      {/* similiar products based on category */}
    </div>
  );
}
