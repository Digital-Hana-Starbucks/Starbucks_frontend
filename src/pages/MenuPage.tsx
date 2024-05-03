import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { useQuery } from "react-query";
import MenuCard from "../components/organisms/MenuCard";
import Category from "../components/ui/Category";
import { CategoryType } from "../types/category";

const MenuPage = () => {
  const [categoryIdx, setCategoryIdx] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ["menus", categoryIdx],
    queryFn: () => {
      const res = ApiClient.getInstance().getCategoryMenuList(categoryIdx);
      return res;
    },
  });

  useEffect(() => {
    const getCategoryListFunc = async () => {
      const res = await ApiClient.getInstance().getCategoryList();
      console.log(res);
      setCategoryList(res);
    };
    getCategoryListFunc();
  }, []);

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
          <ul className="flex flex-col h-[55vh]">
            {categoryList?.map((category: CategoryType) => (
              <li key={category.categoryIdx}>
                <Category
                  categoryIdx={category.categoryIdx}
                  categoryName={category.categoryName}
                  onClick={() => setCategoryIdxFunc(category.categoryIdx)}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* 메뉴 선택 영역 */}
        <div className="col-span-3">
          <MenuCard data={data} />
        </div>
      </div>
      {/* 장바구니 영역 */}
      <ul className="flex flex-col h-[55vh]">
        {categoryList?.map((category: CategoryType, index) => (
          <li key={category.categoryIdx}></li>
        ))}
      </ul>
    </section>
  );
};

export default MenuPage;
