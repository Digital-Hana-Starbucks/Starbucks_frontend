import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";
import { useQuery } from "react-query";
import OrderType from "../types/order";
import { ApiClient } from "../apis/apiClient";

const columnsForOrder = ["번호", "주문코드", "총금액", "주문상태", "주문일시"];

const AdminOrderList: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: () => {
      return ApiClient.getInstance().getOrderList();
    },
  });

  const handleDelete = (index: number) => {
    console.log(`Delete item at index ${index}`);
  };

  const handleEdit = (index: number) => {
    console.log(data![index]?.orderIdx);
    const orderIdx = data![index]?.orderIdx;
    if (orderIdx !== undefined) {
      navigate(`/adminOrderEdit/${orderIdx}`);
      console.log(`Edit item at index ${orderIdx}`);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  return (
    <div>
      {data == null || data.length === 0 ? (
        <p>주문목록이 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <p className="text-red-500 inline-block">{data.length}</p>건의
            주문이 있습니다.
          </h2>
          <ListTable
            tableData={data.map((order, index) => [
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
