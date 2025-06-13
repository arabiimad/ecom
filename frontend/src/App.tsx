import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout/RootLayout";
import ErrorElement from "./Components/Error/ErrorElement";
import { lazy, useEffect } from "react";
import { CategoryProductsLoader } from "./Pages/CategoryProductsPage.tsx";
import { AllProductsLoader } from "./Pages/AllProductsPage.tsx";
import { singleProductLoader } from "./Pages/ProductDescriptionPage.tsx";
import { cartLoader } from "./Pages/CartPage";
import { useDispatch } from "react-redux";
import { restoratUser } from "./store/auth-slice.tsx";
import { AppDispatch } from "./store/redux-store.tsx";
import { PaymentLoader } from "./Pages/PaymentPage.tsx";
import { OrderLoader } from "./Pages/OrderDetailsPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          Component: lazy(() => import("./Pages/HomePage")),
        },
        {
          path: "/shop",
          loader: () => redirect("/shop/category/all"),
        },
        {
          path: "/shop/category",
          loader: () => redirect("/shop/category/all"),
        },
        {
          path: "/shop/category/all",
          loader: AllProductsLoader,
          Component: lazy(() => import("./Pages/AllProductsPage.tsx")),
        },
        {
          path: "/shop/category/:categoryName",
          loader: CategoryProductsLoader,
          Component: lazy(() => import("./Pages/CategoryProductsPage.tsx")),
        },
        {
          path: "/shop/category/:categoryName/:productId",
          loader: singleProductLoader,
          Component: lazy(() => import("./Pages/ProductDescriptionPage.tsx")),
        },
        {
          path: "/cart",
          loader: cartLoader,
          Component: lazy(() => import("./Pages/CartPage")),
        },
        {
          path: "/contactUs",
          Component: lazy(() => import("./Pages/ContactUsPage")),
        },
        {
          path: "/auth",
          Component: lazy(() => import("./Pages/AuthenticationPage")),
        },
        {
          path: "/register",
          Component: lazy(() => import("./Pages/RegistrationPage.tsx")),
        },
        {
          path: "/myAccount",
          Component: lazy(() => import("./Pages/UserDetailsPage.tsx")),
        },
        {
          path: "/update",
          Component: lazy(() => import("./Pages/UpdateUserPage.tsx")),
        },
        {
          path: "/payment/:orderId",
          loader:PaymentLoader,
          Component: lazy(() => import("./Pages/PaymentPage.tsx")),
        },
        {
          path: "/orders",
          Component: lazy(() => import("./Pages/AllOrdersPage.tsx")),
        },
        {
          path: "/orders/:orderId/:Paid",
          loader:OrderLoader,
          Component: lazy(() => import("./Pages/OrderDetailsPage.tsx")),
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

function App() {  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    
    dispatch(restoratUser());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
