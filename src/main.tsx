import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Landing from "./pages/Landing";
import CheckUser from "./pages/CheckUser";
import ChoosePlace from "./pages/ChoosePlace";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminMenuList from "./pages/AdminMunuList";
import AdminMenuEdit from "./pages/AdminMenuEdit";
import AdminUserList from "./pages/AdminUserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "checkUser", element: <CheckUser /> },
      { path: "choosePlace", element: <ChoosePlace /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "adminMenuList", element: <AdminMenuList /> },
      { path: "adminMenuEdit/:idx", element: <AdminMenuEdit /> },
      { path: "adminUserList", element: <AdminUserList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
