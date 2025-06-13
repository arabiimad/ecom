import { LoaderFunction } from "react-router-dom";
import ProductDescription from "../Components/Products/ProductDescription/ProductDescription";

export default function ProductDescriptionPage() {
  return <ProductDescription />;
}

export const singleProductLoader: LoaderFunction = async ({ params }) => {
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
    if (data.length > 0) {
      return data;
    }
    throw new Error("No Data Found");
  } catch (err) {
    console.log(err);
  }
};
