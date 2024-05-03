import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuType from "../types/menu";
import EditForm from "../components/organisms/EditForm";

const AdminMenuEdit: React.FC = () => {
  const navigate = useNavigate();
  const { index } = useParams<{ index: string }>();

  const menuToEdit: MenuType = {
    menuIdx: 1,
    menuId: "b19734a5-068b-11ef-931f-0affc16f57d3",
    menuName: "슈크림 라떼",
    menuPrice: 6300,
    menuImage:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000000418]_20240327144723352.jpg",
    menuDate: "2024-04-30",
    categoryIdx: 1,
  };

  const handleSave = (updatedMenu: MenuType) => {
    console.log("Updated menu:", updatedMenu);
    console.log("Updated menu:", updatedMenu.menuDate);
    console.log("Updated menu:", updatedMenu.menuId);
    console.log("Updated menu:", updatedMenu.menuPrice);
    console.log("Updated menu:", updatedMenu.menuName);
    navigate(`/admin`);
    // TODO: 수정 api연결
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
      <EditForm data={menuToEdit} onSave={handleSave} labels={labels} />
    </div>
  );
};

export default AdminMenuEdit;
