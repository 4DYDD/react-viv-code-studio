import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Web from "./Web.jsx";

import HomePage from "./pages/Home";
import Default from "./pages/Default";
import ProductsPage from "./pages/products";
import DetailProductPage from "./pages/detailProduct";
import ErrorPage from "./pages/404";
import Testbutton from "./pages/testbutton";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";

import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  { path: "/", element: <Default />, errorElement: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/product/:id", element: <DetailProductPage /> },
  { path: "/testbutton", element: <Testbutton /> },
  { path: "/profilePage", element: <ProfilePage /> },
  { path: "/loginPage", element: <LoginPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
