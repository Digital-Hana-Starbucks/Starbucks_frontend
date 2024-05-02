import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuType from "../types/menu";
import { ApiClient } from "../apis/apiClient";
import ListTable from "../components/organisms/ListTable";

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
  // const [menus, setMenus] = useState<MenuType[]>([]);
  // useEffect(() => {
  //   ApiClient.getInstance()
  //     .getMenuList()
  //     .then((data) => {
  //       setMenus(data);
  //       console.log("data" + data); // 업데이트된 상태 출력
  //     });
  // }, []);

  const menus = [
    {
      menuIdx: 1,
      menuId: "b19734a5-068b-11ef-931f-0affc16f57d3",
      menuName: "슈크림 라떼",
      menuPrice: 6300,
      menuImage:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000000418]_20240327144723352.jpg",
      menuDate: "2024-04-30",
      category_idx: 1,
    },
    {
      menuIdx: 2,
      menuId: "c8b3ba73-05f1-11ef-9474-0affc16f57d3",
      menuName: "플랫 화이트",
      menuPrice: 5600,
      menuImage:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000005181]_20240326103832835.jpg",
      menuDate: "2024-04-29",
      category_idx: 1,
    },
    {
      menuIdx: 3,
      menuId: "c8b3bb8c-05f1-11ef-9474-0affc16f57d3",
      menuName: "카페 아메리카노",
      menuPrice: 4500,
      menuImage:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
      menuDate: "2024-04-29",
      category_idx: 1,
    },
    {
      menuIdx: 4,
      menuId: "c8b3bc2e-05f1-11ef-9474-0affc16f57d3",
      menuName: "카페 라떼",
      menuPrice: 5000,
      menuImage:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110569]_20210415143035989.jpg",
      menuDate: "2024-04-29",
      category_idx: 1,
    },
    {
      menuIdx: 5,
      menuId: "c8b3bcba-05f1-11ef-9474-0affc16f57d3",
      menuName: "카페 모카",
      menuPrice: 5500,
      menuImage:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110566]_20210415134334280.jpg",
      menuDate: "2024-04-29",
      category_idx: 1,
    },
  ];
  const handleDelete = (index: number) => {
    // Handle delete logic here
    console.log(`Delete item at index ${index}`);
  };

  const handleEdit = (index: number) => {
    navigate(`/adminMenuEdit/${index}`);
    console.log(`Edit item at index ${index}`);
  };

  return (
    <div>
      <h1 className="text-3xl m-2">상품 목록</h1>
      {menus.length === 0 || menus == null ? (
        <p>메뉴가 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2">
            총 <p className="text-red-500 inline-block">{menus.length}</p>개의
            메뉴가 있습니다.
          </h2>
          <ListTable
            tableData={menus.map((menu) => [
              menu.menuIdx,
              menu.menuName,
              menu.menuPrice,
              menu.menuImage,
              getCategory(menu.category_idx), // Get category based on category_idx
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
