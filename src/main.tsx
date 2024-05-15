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
import AdminMenuList from "./pages/AdminMenuList";
import AdminMenuEdit from "./pages/AdminMenuEdit";
import AdminUserList from "./pages/AdminUserList";
import AdminUserEdit from "./pages/AdminUserEdit";
import AdminOrderList from "./pages/AdminOrderList";
import AdminOrderEdit from "./pages/AdminOrderEdit";
import Admin from "./pages/Admin";
import OrderCompletion from "./pages/OrderCompletion";
import Order from "./pages/Order";
import MenuPage from "./pages/MenuPage";
import CheckOrder from "./pages/CheckOrder";

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
      { path: "menu", element: <MenuPage /> },
      { path: "CheckOrder", element: <CheckOrder /> },
      { path: "order", element: <Order /> },
      { path: "completion", element: <OrderCompletion /> },
      { path: "adminMenuList", element: <AdminMenuList /> },
      { path: "adminMenuEdit/:idx", element: <AdminMenuEdit /> },
      { path: "adminUserList", element: <AdminUserList /> },
      { path: "adminUserEdit/:idx", element: <AdminUserEdit /> },
      { path: "adminOrderList", element: <AdminOrderList /> },
      { path: "adminOrderEdit/:idx", element: <AdminOrderEdit /> },
      { path: "admin", element: <Admin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
