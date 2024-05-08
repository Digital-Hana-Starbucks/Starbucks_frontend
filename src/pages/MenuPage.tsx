import { useEffect, useState } from "react";
import { ApiClient } from "../apis/apiClient";
import { useQuery } from "react-query";
import MenuCard from "../components/organisms/MenuCard";
import Category from "../components/ui/Category";
import { CategoryType } from "../types/category";
import CustomModal from "../components/organisms/CustomModal";
import { BasketMenuType } from "../types/menu";
import { useSession } from "../hooks/basketContext";
import BasketMenu from "../components/molecules/BasketMenu";
import BasketCard from "../components/organisms/BasketCard";
import RecommendationModal from "../components/organisms/RecommendationModal";

const MenuPage = () => {
  const [categoryIdx, setCategoryIdx] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<BasketMenuType>();
  const [count, setCount] = useState<number>(1);

  const { basket, resetBasket } = useSession();

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
      setCategoryList(res);
    };
    getCategoryListFunc();
  }, []);

  const setCategoryIdxFunc = (idx: number) => {
    setCategoryIdx(idx);
  };

  const setOpenModalFunc = () => {
    setOpenModal(true);
  };

  const setOpenModal2Func = () => {
    setOpenModal2(true);
  };

  const setMenuFunc = (menu: BasketMenuType) => {
    setSelectedMenu(menu);
  };

  const setCountFunc = () => {
    setCount(count + 1);
  };

  const clickConfirm = () => {
    if (basket.basketList.length == 0) {
      return;
    }
    setOpenModal2(!openModal2);
  };

  return (
    <section className="h-[100vh]">
      <div className="relative">
        <div className="absolute">
          {openModal && (
            <CustomModal
              message={"선택하신 음료의 온도와 사이즈를 선택해주세요."}
              modalToggle={() => setOpenModal(!openModal)}
              modalToggle2={() => setOpenModal2(!openModal2)}
              menu={selectedMenu!}
              setCountFunc={setCountFunc}
              openModal2={openModal2}
            />
          )}
          {openModal2 && (
            <RecommendationModal
              message="더 맛있는 메뉴를 확인해보세요!"
              modalToggle={() => setOpenModal(!openModal)}
              modalToggle2={() => setOpenModal2Func()}
              setMenuFunc={setCountFunc}
              openModal2={openModal2}
              count={count}
              setCountFunc={setCountFunc}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center bg-starbucksGreen h-[15vh]">
        <img
          className="h-full w-full"
          src="./../../public/img/banner.png"
          alt="banner"
        />
      </div>

      <div className="flex-row grid grid-cols-4 gap-2 bg-starbucksBeige h-[55vh] ">
        {/* 메뉴 버튼 영역 */}
        <div>
          <ul className="flex flex-col h-[50vh]">
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
        <div className="col-span-3 mt-1 h-[55vh]">
          <MenuCard
            data={data}
            setMenuFunc={setMenuFunc}
            setOpenModalFunc={setOpenModalFunc}
            count={count}
            setCountFunc={setCountFunc}
          />
        </div>
      </div>
      {/* 장바구니 영역 */}
      <div className="flex flex-col h-[30vh] ">
        <div className="flex justify-between bg-starbucksGreen h-6">
          <p className="pl-3 text-white">주문내역</p>
          <p className="pr-2 text-white">
            총 가격 : {basket.totalPrice.toLocaleString()}원
          </p>
        </div>
        <div className="flex-row grid grid-cols-4 gap-2">
          {/* 버튼영역 */}
          <div className="static flex flex-col justify-around">
            <div className="flex justify-center">
              <button
                className="w-32 h-20 bg-danger rounded-xl"
                onClick={() => resetBasket()}
              >
                <p className="text-white">주문취소</p>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="w-32 h-20 bg-starbucksGreen rounded-xl"
                onClick={() => clickConfirm()}
              >
                <p className="text-white">주문완료</p>
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <BasketCard basketList={basket.basketList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
