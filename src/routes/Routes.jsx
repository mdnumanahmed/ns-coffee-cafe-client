import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
// import SignUp from "../pages/SignUp";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import OurMenu from "../pages/OurMenu";
import ProductDetails from "../components/Products/ProductDetails";
import MyProducts from "../pages/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
        loader: () => fetch("http://localhost:5000/itemsCount"),
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/coffee-club",
        element: <Home />,
      },
      {
        path: "/we-offer",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
    ],
  },
]);

export default router;
