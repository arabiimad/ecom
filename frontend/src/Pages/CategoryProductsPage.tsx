import { LoaderFunction } from "react-router-dom";
import CategoryProducts from "../Components/Products/CategoryProducts/CategoryProducts";

export default function ProductsPage() {
  return <CategoryProducts />;
}

export const CategoryProductsLoader: LoaderFunction = async ({ params }) => {
  const category = params.categoryName;
  let endpoint = "";
  if (
    category === "Men Clothes" ||
    category === "Baby Clothes" ||
    category === "Women Clothes" ||
    category === "Other Clothes"
  ) {
    endpoint = `category/name/${category}`;
  } else {
    throw new Error("unrecognized category");
  }
  try {
    const response = await fetch(
      `/api/v1/products/${endpoint}`
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return { data, category };
  } catch (err) {
    console.log(err);
  }
};
