import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[100vh]">
      <div className="flex justify-center items-center bg-starbucksGreen h-[20vh]">
        <img
          className="h-full w-full"
          src="./../../public/img/banner.png"
          alt="banner"
        />
      </div>
      <div className="flex flex-row grid grid-cols-4 gap-2 bg-starbucksBeige h-[55vh] ">
        {/* 메뉴 버튼 영역 */}
        <div>1공간차지</div>
        {/* 메뉴 선택 영역 */}
        <div className="col-span-3">3공간차지</div>
      </div>
    </section>
  );
};

export default MenuPage;
