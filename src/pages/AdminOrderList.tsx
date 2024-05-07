import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";
import { useMutation, useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";
import { OrderType } from "../types/order";
import { formatter } from "../utils/dateTimeformat";

const columnsForOrder = [
  "번호",
  "주문자",
  "주문코드",
  "총금액",
  "상태",
  "주문일시",
];

const AdminOrderList: React.FC = () => {
  const navigate = useNavigate();
  const [nullIndexes, setNullIndexes] = useState<number[]>([]);

  const { isLoading, data, refetch } = useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: () => ApiClient.getInstance().getOrderList(),
    onSuccess: (data) => {
      const indexes = findNullIndexes(data);
      setNullIndexes(indexes);
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const findNullIndexes = (orders: OrderType[]) => {
    return orders.reduce((nullIndexes: number[], order, index) => {
      if (order.userNickname === null) {
        nullIndexes.push(index);
      }
      return nullIndexes;
    }, []);
  };

  const deleteOrderMutation = useMutation(
    (index: number) => ApiClient.getInstance().deleteOrder(index),
    {
      onSuccess: () => {
        alert("삭제 완료");
        refetch();
      },
    },
  );

  const handleDelete = (index: number) => {
    const orderIdx = data![index]?.orderIdx;
    if (orderIdx !== undefined) {
      deleteOrderMutation.mutate(orderIdx);
    } else {
      console.error(`Order index not found for index ${index}`);
    }
  };

  const handleEdit = (index: number) => {
    const order = data![index];
    if (order) {
      const userNickname = findUserNickname(order.userNickname, index);
      navigate(`/adminOrderEdit/${order.orderIdx}`, {
        state: { ...order, userNickname },
      });
    } else {
      console.error(`Order index not found for index ${index}`);
    }
  };

  const findUserNickname = (userNickname: string | null, index: number) => {
    return userNickname === null
      ? `S-${nullIndexes.indexOf(index) + 1}`
      : userNickname;
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data == null || data.length === 0 ? (
        <p>주문목록이 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <span className="text-red-500 inline-block">{data.length}</span>
            건의 주문이 있습니다.
          </h2>
          <ListTable
            tableData={data.map((order, index) => [
              index + 1,
              findUserNickname(order.userNickname, index),
              order.orderId,
              order.totalPrice,
              order.orderStatus,
              formatter(new Date(order.orderDate)),
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
