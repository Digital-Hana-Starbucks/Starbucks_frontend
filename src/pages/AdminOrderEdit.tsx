import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import OrderType from "../types/order";

const AdminUserEdit: React.FC = () => {
  const navigate = useNavigate();
  const { index } = useParams<{ index: string }>();

  const orderToEdit = {
    orderIdx: 1,
    orderId: "asdfa -13f1asfa-asdfe213",
    totalPrice: 18700,
    orderStatus: "수령 완료",
    orderDate: "2024-04-30",
  };

  const handleSave = (updatedOrderr: OrderType) => {
    navigate(`/AdminOrderList`);
    // TODO: 수정 api연결
  };

  const labels = [
    { key: "orderId", label: "주문코드", editable: false },
    { key: "totalPrice", label: "주문총금액", editable: false },
    { key: "orderStatus", label: "주문상태", editable: true },
    { key: "orderDate", label: "결재시간", editable: false },
  ];

  return (
    <div>
      <h1 className="text-2xl m-2">주문 정보 수정</h1>
      <EditForm data={orderToEdit} onSave={handleSave} labels={labels} />
    </div>
  );
};

export default AdminUserEdit;
