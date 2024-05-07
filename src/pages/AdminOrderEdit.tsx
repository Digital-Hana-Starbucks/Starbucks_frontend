import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import OrderType from "../types/order";
import { useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";

const AdminUserEdit: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const index = location.pathname.split("/").pop();

  const { isLoading, data } = useQuery({
    queryKey: ["menu", Number(index)],
    queryFn: () => {
      const res = ApiClient.getInstance().getOrder(Number(index));
      return res;
    },
  });

  const handleSave = (updatedOrderr: OrderType) => {
    navigate(`/admin`);
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
      <EditForm data={data} onSave={handleSave} labels={labels} />
    </div>
  );
};

export default AdminUserEdit;
