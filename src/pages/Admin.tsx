import React, { useState } from "react";
import AdminNav from "../components/organisms/AdminNav";
import AdminMenuList from "./AdminMunuList";
import AdminUserList from "./AdminUserList";
import AdminOrderList from "./AdminOrderList";

const Admin: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("menu");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">관리자 페이지</h1>
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AdminNav
            id="user"
            label="회원 관리"
            checked={selectedPage === "user"}
            onChange={() => setSelectedPage("user")}
          />
          <AdminNav
            id="menu"
            label="메뉴 관리"
            checked={selectedPage === "menu"}
            onChange={() => setSelectedPage("menu")}
          />
          <AdminNav
            id="order"
            label="주문 관리"
            checked={selectedPage === "order"}
            onChange={() => setSelectedPage("order")}
          />
        </div>
      </div>
      <div>
        {selectedPage === "menu" ? (
          <AdminMenuList />
        ) : selectedPage === "user" ? (
          <AdminUserList />
        ) : (
          <AdminOrderList />
        )}
      </div>
    </div>
  );
};

export default Admin;
