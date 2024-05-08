import { FC } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import Menu from "../molecules/Menu";

interface IProps {
  data?: MenuType[];
  setOpenModalFunc: () => void;
  setMenuFunc: (menu: BasketMenuType) => void;
  count: number;
  setCountFunc: () => void;
}

const MenuCard: FC<IProps> = ({
  data,
  setOpenModalFunc,
  setMenuFunc,
  count,
  setCountFunc,
}) => {
  return (
    <div>
      <ul className="flex-row grid grid-cols-3 gap-2 bg-starbucksBeige h-[55vh] overflow-y-scroll">
        {data?.map((menu: MenuType) => (
          <li key={menu.menuIdx}>
            <Menu
              menuIdx={menu.menuIdx}
              menuName={menu.menuName}
              menuImage={menu.menuImage}
              menuPrice={menu.menuPrice}
              categoryIdx={menu.categoryIdx}
              setOpenModalFunc={setOpenModalFunc}
              setMenuFunc={setMenuFunc}
              count={count}
              setCountFunc={setCountFunc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCard;
