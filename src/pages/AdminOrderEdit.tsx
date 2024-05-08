import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import { OrderType, updateOrderType } from "../types/order";
import { ApiClient } from "../apis/apiClient";
import { useMutation } from "react-query";

const AdminUserEdit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data: OrderType = { ...location.state };
  const index = location.pathname.split("/").pop();

  const updateOrderMutation = useMutation(
    (updatedOrder: updateOrderType) =>
      ApiClient.getInstance().updateOrder(Number(index), updatedOrder),
    {
      onSuccess: () => {
        alert("수정 완료");
        history.back();
      },
    },
  );

  const handleSave = (order: OrderType) => {
    const updatedOrder: updateOrderType = {
      orderStatus: order.orderStatus,
    };
    updateOrderMutation.mutate(updatedOrder);
  };

  const labels = [
    { key: "userNickname", label: "주문자", editable: false, type: "text" },
    { key: "orderId", label: "주문코드", editable: false, type: "text" },
    { key: "totalPrice", label: "주문총금액", editable: false, type: "number" },
    { key: "orderStatus", label: "주문상태", editable: true, type: "select" },
    { key: "orderDate", label: "결재시간", editable: false, type: "text" },
  ];

  const options = [
    { value: "결제완료", label: "결제완료" },
    { value: "조리중", label: "조리중" },
    { value: "조리완료", label: "조리완료" },
    { value: "수령완료", label: "수령완료" },
  ];

  return (
    <div className="bg-starbucksBeige min-h-screen overflow-y-auto">
      <h1 className="text-2xl m-5">주문 정보 수정</h1>
      <EditForm
        data={data}
        onSave={handleSave}
        labels={labels}
        options={options}
      />
    </div>
  );
};

export default AdminUserEdit;
