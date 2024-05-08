import { FC } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import BasketMenu from "../molecules/BasketMenu";

interface IProps {
  basketList?: BasketMenuType[];
}

const BasketCard: FC<IProps> = ({ basketList }) => {
  return (
    <div>
      <ul className="py-2 pl-1 pr-2 flex-row grid grid-cols-2 h-[26vh] gap-3 overflow-y-scroll">
        {basketList?.map((menu: BasketMenuType) => (
          <li key={menu.basketIdx}>
            <BasketMenu
              basketIdx={menu.basketIdx}
              menuIdx={menu.menuIdx}
              menuPrice={menu.menuPrice}
              menuName={menu.menuName}
              menuImage={menu.menuImage}
              orderDetailCount={menu.orderDetailCount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
