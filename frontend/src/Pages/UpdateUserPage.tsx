import { LoaderFunction } from "react-router-dom";
import UpdateUser from "../Components/UpdateUser/UpdateUser";

export default function RegistrationPage() {
  return <UpdateUser />;
}

export const UpdateUserLoader: LoaderFunction = () => {
  return null;
};
