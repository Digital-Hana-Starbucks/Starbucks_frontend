import { FC } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import Menu from "../molecules/Menu";

interface IProps {
  data?: MenuType[];
  setOpenModalFunc: () => void;
  setOpenModalFunc2?: () => void;
  setMenuFunc: (menu: BasketMenuType) => void;
  openModal2?: boolean;
  count: number;
  setCountFunc: () => void;
  fromRecommend?: boolean;
}

const MenuCard: FC<IProps> = ({
  data,
  setOpenModalFunc,
  setOpenModalFunc2,
  setMenuFunc,
  count,
  setCountFunc,
  fromRecommend,
}) => {
  return (
    <div
      className={`grid bg-starbucksBeige w-full h-full ${
        fromRecommend
          ? "grid-cols-4 pl-1 gap-1 mt-4"
          : "grid-cols-3 overflow-y-scroll"
      }`}
    >
      {data?.map((menu: MenuType, idx: number) => (
        <Menu
          key={count * 7 * idx * menu.menuIdx}
          menu={menu}
          setOpenModalFunc={setOpenModalFunc}
          setOpenModalFunc2={() => setOpenModalFunc2!()}
          setMenuFunc={setMenuFunc}
          count={count}
          setCountFunc={setCountFunc}
          fromRecommend={fromRecommend}
        />
      ))}
    </div>
  );
};

export default MenuCard;
