import { FC, useEffect, useState } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import { useSession } from "../../hooks/basketContext";

interface IProps {
  menu: MenuType;
  setOpenModalFunc: () => void;
  setOpenModalFunc2?: () => void;
  setMenuFunc: (menu: BasketMenuType) => void;
  count: number;
  setCountFunc: () => void;
  openModal2?: boolean;
}

const Menu: FC<IProps> = ({
  menu,
  setOpenModalFunc,
  setOpenModalFunc2,
  setMenuFunc,
  count,
  setCountFunc,
  openModal2,
}) => {
  const { addBasket } = useSession();

  const MenuClick = () => {
    if (menu.categoryIdx == 4 || menu.categoryIdx == 5) {
      addBasket({
        basketIdx: count,
        menuIdx: menu.menuIdx,
        menuName: menu.menuName,
        menuPrice: menu.menuPrice,
        menuImage: menu.menuImage,
        orderDetailCount: 1,
      });
      setCountFunc();
      return;
    }

    setMenuFunc({
      basketIdx: count,
      menuIdx: menu.menuIdx,
      menuName: menu.menuName,
      menuPrice: menu.menuPrice,
      menuImage: menu.menuImage,
      orderDetailCount: 1,
    });

    console.log(openModal2);

    if (openModal2) {
      setOpenModalFunc2!();
    }
    setOpenModalFunc();
  };

  return (
    <li className="flex flex-col py-1 w-32 h-full" onClick={() => MenuClick()}>
      <img
        className="rounded-xl w-32 h-32 cursor-pointer"
        src={menu.menuImage}
      />
      <div className="flex flex-col justify-between h-20">
        <p className="font-medium text-left line-clamp-2 cursor-pointer">
          {menu.menuName}
        </p>
        <p className="font-medium inline-block text-left cursor-pointer">
          {menu.menuPrice.toLocaleString() + "원"}
        </p>
      </div>
    </li>
  );
};

export default Menu;
