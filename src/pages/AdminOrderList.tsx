import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";

const columnsForOrder = ["번호", "주문코드", "총금액", "주문상태", "주문일시"];

const AdminOrderList: React.FC = () => {
  const navigate = useNavigate();

  const orders = [
    {
      orderIdx: 1,
      orderId: "asdfa -13f1asfa-asdfe213",
      totalPrice: 18700,
      orderStatus: "수령 완료",
      orderDate: "2024-04-30",
    },
    {
      orderIdx: 2,
      orderId: "a65se1-6a84esf1-6a5se1f",
      totalPrice: 0,
      orderStatus: "수령 완료",
      orderDate: "2024-04-30",
    },
  ];
  const handleDelete = (index: number) => {
    console.log(`Delete item at index ${index}`);
  };

  const handleEdit = (index: number) => {
    const orderIdx = orders[index]?.orderId;
    if (orderIdx !== undefined) {
      navigate(`/adminOrderEdit/${orderIdx}`);
      console.log(`Edit item at index ${orderIdx}`);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  return (
    <div>
      {orders.length === 0 || orders == null ? (
        <p>주문목록이 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <p className="text-red-500 inline-block">{orders.length}</p>건의
            주문이 있습니다.
          </h2>
          <ListTable
            tableData={orders.map((order, index) => [
              index + 1,
              order.orderId,
              order.totalPrice,
              order.orderStatus,
              order.orderDate,
            ])}
            columns={columnsForOrder}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

export default AdminOrderList;
