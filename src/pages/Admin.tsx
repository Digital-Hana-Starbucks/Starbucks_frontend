import React, { useState } from "react";
import AdminNav from "../components/organisms/AdminNav";
import AdminMenuList from "./AdminMenuList"; // Fixed typo in import
import AdminUserList from "./AdminUserList";
import AdminOrderList from "./AdminOrderList";

const Admin: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("menu"); // Added type annotation for selectedPage state

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <div className="p-4 min-h-screen h-full  bg-starbucksBeige">
      <h1 className="text-2xl font-bold text-gray-900 mb-5">관리자 페이지</h1>
      <div className="grid grid-cols-5 ">
        <div></div>
        <AdminNav
          id="user"
          label="회원 관리"
          checked={selectedPage === "user"}
          onChange={() => handlePageChange("user")}
        />
        <AdminNav
          id="menu"
          label="메뉴 관리"
          checked={selectedPage === "menu"}
          onChange={() => handlePageChange("menu")}
        />
        <AdminNav
          id="order"
          label="주문 관리"
          checked={selectedPage === "order"}
          onChange={() => handlePageChange("order")}
        />
        <div></div>
      </div>
      <div>
        {selectedPage === "menu" && <AdminMenuList />}{" "}
        {selectedPage === "user" && <AdminUserList />}{" "}
        {selectedPage === "order" && <AdminOrderList />}{" "}
      </div>
    </div>
  );
};

export default Admin;
