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
}

const MenuCard: FC<IProps> = ({
  data,
  setOpenModalFunc,
  setOpenModalFunc2,
  setMenuFunc,
  openModal2,
  count,
  setCountFunc,
}) => {
  return (
    <ul
      className={`grid bg-starbucksBeige w-full h-full overflow-y-scroll ${
        openModal2 ? "grid-cols-4 gap-2" : "grid-cols-3"
      }`}
    >
      {data?.map((menu: MenuType) => (
        <Menu
          menu={menu}
          setOpenModalFunc={setOpenModalFunc}
          setOpenModalFunc2={() => setOpenModalFunc2!()}
          setMenuFunc={setMenuFunc}
          count={count}
          setCountFunc={setCountFunc}
          openModal2={openModal2}
        />
      ))}
    </ul>
  );
};

export default MenuCard;
