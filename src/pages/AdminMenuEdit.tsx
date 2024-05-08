import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import { MenuType, UpdatedMenuType } from "../types/menu";
import { useMutation, useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";

const AdminMenuEdit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const index = location.pathname.split("/").pop();

  const { isLoading, data } = useQuery<MenuType>({
    queryKey: ["menu", Number(index)],
    queryFn: () => ApiClient.getInstance().getMenu(Number(index)),
  });

  const updateMenuMutation = useMutation(
    (formData: FormData) =>
      ApiClient.getInstance().updateMenu(Number(index), formData),
    {
      onSuccess: () => {
        alert("수정 완료");
        navigate(`/admin`);
      },
    },
  );

  const handleSave = (updatedMenu: MenuType, newMenuImg: File | undefined) => {
    const formData = buildFormData(updatedMenu, newMenuImg);
    updateMenuMutation.mutate(formData);
  };

  const buildFormData = (
    updatedMenu: MenuType,
    newMenuImg: File | undefined,
  ) => {
    const formData = new FormData();
    const newData: UpdatedMenuType = {
      menuName: updatedMenu.menuName,
      menuPrice: updatedMenu.menuPrice,
      categoryIdx: updatedMenu.categoryIdx,
    };
    const json = JSON.stringify(newData);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);
    if (newMenuImg) {
      formData.append("menuImg", newMenuImg);
    }
    return formData;
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
    <div className="bg-starbucksBeige min-h-screen overflow-y-auto">
      <h1 className="text-3xl m-5">상품 정보 수정</h1>
      {data && <EditForm data={data} onSave={handleSave} labels={labels} />}
    </div>
  );
};

export default AdminMenuEdit;
