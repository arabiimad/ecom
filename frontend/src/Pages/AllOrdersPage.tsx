import { LoaderFunction } from "react-router-dom";
import AllOrders from "../Components/Order/AllOrders/Allorders";


export default function AllOrdersPage() {

  return <AllOrders />;

}

export const AllOrdersLoader: LoaderFunction = async () => {
return null
};

