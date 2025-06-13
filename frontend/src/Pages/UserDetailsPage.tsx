import { LoaderFunction } from "react-router-dom";
import UserDetails from "../Components/UserDetails/UserDetails";


export default function RegistrationPage() {
  
  return <UserDetails />;
}

export const userDetailsLoader: LoaderFunction = () => {
  return null;
};
