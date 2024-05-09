import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";
import { useMutation, useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";
import { MenuType } from "../types/menu";
import { PAGE_SIZE } from "../utils/constant";

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
    queryFn: () => ApiClient.getInstance().getMenuList(),
  });

  const [currentPage, setCurrentPage] = useState(1);
  const deleteMenuMutation = useMutation(
    (index: number) => ApiClient.getInstance().deleteMenu(index),
    {
      onSuccess: () => {
        alert("삭제 완료");
        refetch();
      },
      onError: () => {
        alert("주문 내역이 존재해 삭제가 불가능합니다.");
        refetch();
      },
    },
  );

  const handleDelete = (index: number) => {
    const menuIdx = data![index]?.menuIdx;
    if (menuIdx !== undefined) {
      deleteMenuMutation.mutate(menuIdx);
    } else {
      console.error(`Menu index not found for index ${index}`);
    }
  };

  const handleEdit = (index: number) => {
    const menuIdx = data![index]?.menuIdx;
    if (menuIdx !== undefined) {
      navigate(`/adminMenuEdit/${menuIdx}`);
    } else {
      console.error(`Menu index not found for index ${index}`);
    }
  };

  const totalPages = data ? Math.ceil(data.length / PAGE_SIZE) : 0;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const slicedData = data?.slice(startIndex, endIndex);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length === 0 ? (
        <p>메뉴가 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <span className="text-red-500 inline-block">{data?.length}</span>
            개의 메뉴가 있습니다.
          </h2>
          <ListTable
            tableData={slicedData!.map((menu, index) => [
              startIndex + index + 1,
              menu.menuName,
              menu.menuPrice,
              menu.menuImage,
              getCategory(menu.categoryIdx),
            ])}
            columns={columnsForMenu}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <div className="w-full">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`m-2 text-sm  hover:text-starbucksGreen ${
                  currentPage === index + 1
                    ? "text-starbucksGreen"
                    : "text-gray-400"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenuList;
