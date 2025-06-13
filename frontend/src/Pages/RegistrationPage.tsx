import { LoaderFunction } from "react-router-dom";
import Registration from "../Components/Registration/Registration";

export default function RegistrationPage() {
  return <Registration />;
}

export const regLoader: LoaderFunction = () => {
  return null;
};
