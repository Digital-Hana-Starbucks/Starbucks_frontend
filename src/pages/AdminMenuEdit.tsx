import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuType from "../types/menu";
import EditForm from "../components/organisms/EditForm";
import { useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";

const AdminMenuEdit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const index = location.pathname.split("/").pop();

  const { isLoading, data } = useQuery({
    queryKey: ["menu", Number(index)],
    queryFn: () => {
      const res = ApiClient.getInstance().getMenu(Number(index));
      return res;
    },
  });

  const handleSave = (updatedMenu: MenuType) => {
    navigate(`/admin`);
  };

  const labels = [
    { key: "menuName", label: "이름", editable: true },
    { key: "menuPrice", label: "가격", editable: true },
    { key: "menuId", label: "상품 코드", editable: false },
    { key: "menuImage", label: "이미지", editable: true },
    { key: "categoryIdx", label: "카테고리", editable: true },
    { key: "menuDate", label: "최종 수정 시간", editable: false },
  ];

  return (
    <div>
      <h1 className="text-3xl m-2">상품 정보 수정</h1>
      {data && <EditForm data={data} onSave={handleSave} labels={labels} />}
    </div>
  );
};

export default AdminMenuEdit;
