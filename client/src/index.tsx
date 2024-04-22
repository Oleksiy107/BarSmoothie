import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultMain } from "./components/DefaultMain/DefaultMain";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Page404 } from "./components/Page404/Page404";
import { Basket } from "./components/Basket/Basket";
import { App } from "./App";
import "./index.scss";
import { StoreProvider } from "./store/StoreProvider";
import { Constructor } from "./components/Constructor/Constructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <DefaultMain />,
      },
      {
        path: "constructor",
        element: <Constructor />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
