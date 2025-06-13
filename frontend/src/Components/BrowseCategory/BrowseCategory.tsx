import { useNavigate } from "react-router-dom";
import classes from "./BrowseCategory.module.css";
import OtherClothes from "../../assets/OtherClothes.jpg";
import WomenClothes from "../../assets/WomenClothes.jpg";
import MenClothes from "../../assets/MenClothes.jpg";
import BabyClothes from "../../assets/BabyClothes.jpg";
const categories = [
  {
    name: "Men Clothes",
    image: MenClothes,
  },
  {
    name: "Women Clothes",
    image: WomenClothes,
  },
  {
    name: "Baby Clothes",
    image: BabyClothes,
  },
  {
    name: "Other Clothes",
    image: OtherClothes,
  },
];

interface Props {
  title: string;
}

export default function BrowseCategory({ title }: Props) {
  const navigate = useNavigate();

  return (
    <div className={classes.browseCategories}>
      <h2>{title}</h2>
      <div className={classes.categoriesContainer}>
        {categories.map((category, index) => {
          return (
            <div key={index} className={classes.category}>
              <img
                className={classes.image}
                src={category.image}
                alt="category image"
                id="image"
                onClick={() => navigate(`/shop/category/${category.name}`)}
              />
              <p className={classes.categoryName}>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
