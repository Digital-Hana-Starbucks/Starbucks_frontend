import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { MenuType } from "../types/menu";
import { useQuery } from "react-query";
import MenuCard from "../components/organisms/MenuCard";
import Category from "../components/ui/Category";

const MenuPage = () => {
  const [categoryIdx, setCategoryIdx] = useState<number>(1);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ["menus", categoryIdx],
    queryFn: () => {
      const res = ApiClient.getInstance().getCategoryMenuList(categoryIdx);
      return res;
    },
  });

  const setCategoryIdxFunc = (idx: number) => {
    setCategoryIdx(idx);
  };

  return (
    <section className="h-[100vh]">
      <div className="flex justify-center items-center bg-starbucksGreen h-[20vh]">
        <img
          className="h-full w-full"
          src="./../../public/img/banner.png"
          alt="banner"
        />
      </div>
      <div className="flex-row grid grid-cols-4 gap-2 bg-starbucksBeige h-[55vh] ">
        {/* 메뉴 버튼 영역 */}
        <div>
          <Category
            categoryIdx={2}
            categoryName={"홍길동"}
            onClick={() => setCategoryIdxFunc(2)}
          />
        </div>
        {/* 메뉴 선택 영역 */}
        <div className="col-span-3">
          <MenuCard data={data} />
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
