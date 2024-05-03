import { FC } from "react";
import { MenuType } from "../../types/menu";
import Menu from "../molecules/Menu";

interface IProps {
  data?: MenuType[];
}

const MenuCard: FC<IProps> = ({ data }) => {
  return (
    <div>
      {/* <div className="relative">
        <div className="absolute top-5">확인용</div>
      </div> */}
      <ul className="flex-row grid grid-cols-3 gap-2 bg-starbucksBeige h-[55vh] overflow-y-scroll">
        {data?.map((menu: MenuType) => (
          <li key={menu.menuIdx}>
            <Menu
              menuIdx={menu.menuIdx}
              menuName={menu.menuName}
              menuImage={menu.menuImage}
              menuPrice={menu.menuPrice}
              categoryIdx={menu.categoryIdx}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCard;
