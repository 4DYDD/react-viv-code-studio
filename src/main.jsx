import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Web from "./Web.jsx";

import Home from "./pages/Home";
import Default from "./pages/Default";
import ErrorPage from "./pages/404";

const routeDefault = {
  path: "/",
  element: <Default />,
  errorElement: <ErrorPage />,
};
const routeHome = {
  path: "/home",
  element: <Home />,
};

const router = createBrowserRouter([routeDefault, routeHome]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Web /> */}
  </StrictMode>
);
