import { FC, useEffect, useState } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import { useSession } from "../../hooks/basketContext";

interface IProps {
  menuIdx: number;
  menuName: string;
  menuImage: string;
  menuPrice: number;
  categoryIdx: number;
  setOpenModalFunc: () => void;
  setMenuFunc: (menu: BasketMenuType) => void;
  count: number;
  setCountFunc: () => void;
}

const Menu: FC<IProps> = ({
  menuIdx,
  menuName,
  menuImage,
  menuPrice,
  categoryIdx,
  setOpenModalFunc,
  setMenuFunc,
  count,
  setCountFunc,
}) => {
  const { addBasket } = useSession();

  const MenuClick = () => {
    if (categoryIdx == 4 || categoryIdx == 5) {
      addBasket({
        basketIdx: count,
        menuIdx: menuIdx,
        menuName: menuName,
        menuPrice: menuPrice,
        menuImage: menuImage,
        orderDetailCount: 1,
      });
      setCountFunc();
      return;
    }

    setMenuFunc({
      basketIdx: count,
      menuIdx: menuIdx,
      menuName: menuName,
      menuPrice: menuPrice,
      menuImage: menuImage,
      orderDetailCount: 1,
    });

    setOpenModalFunc();
  };

  return (
    <div>
      <div className="px-2 py-1 h-full" onClick={() => MenuClick()}>
        <img className="rounded-xl w-32 h-32 cursor-pointer" src={menuImage} />
        <div className="flex flex-col justify-between h-20">
          <p className="font-medium text-left line-clamp-2 cursor-pointer">
            {menuName}
          </p>
          <p className="font-medium inline-block text-left w-full cursor-pointer">
            {menuPrice.toLocaleString() + "원"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
