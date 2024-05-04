import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuType } from "../types/menu";
import { ApiClient } from "../apis/apiClient";
import ListTable from "../components/organisms/ListTable";
import { useMutation, useQuery } from "react-query";

const columnsForMenu = ["번호", "이름", "가격", "이미지", "카테고리"];

const getCategory = (categoryIdx: number) => {
  switch (categoryIdx) {
    case 1:
      return "에스프레소/콜드브루";
    case 2:
      return "프라푸치노/블렌디드";
    case 3:
      return "티";
    case 4:
      return "케이크";
    case 5:
      return "샌드위치/샐러드";
    default:
      return "";
  }
};

const AdminMenuList: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery<MenuType[]>({
    queryKey: ["menus"],
    queryFn: () => {
      return ApiClient.getInstance().getMenuList();
    },
  });

  const deleteMenuMutation = useMutation(
    (index: number) => ApiClient.getInstance().deleteMenu(index),
    {
      onSuccess: () => {
        alert("삭제 완료");
      },
    },
  );

  const handleDelete = (index: number) => {
    const menuIdx = data![index].menuIdx;
    if (menuIdx !== undefined) {
      deleteMenuMutation.mutate(menuIdx);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  const handleEdit = (index: number) => {
    const menuIdx = data![index].menuIdx;
    if (menuIdx !== undefined) {
      navigate(`/adminMenuEdit/${menuIdx}`);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length === 0 ? (
        <p>메뉴가 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <p className="text-red-500 inline-block">{data?.length}</p>개의
            메뉴가 있습니다.
          </h2>
          <ListTable
            tableData={data!.map((menu) => [
              menu.menuIdx,
              menu.menuName,
              menu.menuPrice,
              menu.menuImage,
              getCategory(menu.categoryIdx),
            ])}
            columns={columnsForMenu}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

export default AdminMenuList;
