import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Landing from "./pages/Landing";
import CheckUser from "./pages/CheckUser";
import ChoosePlace from "./pages/ChoosePlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "checkUser", element: <CheckUser /> },
      { path: "choosePlace", element: <ChoosePlace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
