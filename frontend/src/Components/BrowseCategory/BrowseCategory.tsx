import { useNavigate } from "react-router-dom";
import classes from "./BrowseCategory.module.css";
import InstrumentsImg from "../../assets/Instruments.png";
import ConsumablesImg from "../../assets/Consumables.png";
import EquipmentImg from "../../assets/Equipment.png";
import ProstheticsImg from "../../assets/Prosthetics.png";
const categories = [
  {
    name: "Instruments",
    image: InstrumentsImg,
  },
  {
    name: "Consumables",
    image: ConsumablesImg,
  },
  {
    name: "Equipment",
    image: EquipmentImg,
  },
  {
    name: "Prosthetics",
    image: ProstheticsImg,
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
            <div
              key={index}
              className={classes.category}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
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
