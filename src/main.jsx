import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Web from "./Web.jsx";

import HomePage from "./pages/Home";
import Default from "./pages/Default";
import ProductsPage from "./pages/products";
import ErrorPage from "./pages/404";
import Testbutton from "./pages/testbutton";

const routeDefault = {
  path: "/",
  element: <Default />,
  errorElement: <ErrorPage />,
};

const routeHome = {
  path: "/home",
  element: <HomePage />,
};

const routeProducts = {
  path: "/products",
  element: <ProductsPage />,
};

const routeTestButton = {
  path: "/testbutton",
  element: <Testbutton />,
};

const router = createBrowserRouter([
  routeDefault,
  routeHome,
  routeProducts,
  routeTestButton,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
