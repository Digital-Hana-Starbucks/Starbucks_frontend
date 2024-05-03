import { FC, useEffect, useState } from "react";
import { ApiClient } from "../../apis/apiClient";
import { MenuType } from "../../types/menu";
import { useSession } from "../../context/basketContext";

interface IProps {
  menuIdx: number;
  menuName: string;
  menuImage: string;
  menuPrice: number;
  categoryIdx: number;
}

const Menu: FC<IProps> = ({
  menuIdx,
  menuName,
  menuImage,
  menuPrice,
  categoryIdx,
}) => {
  const { addBasket } = useSession();

  type BasketMenuType = {
    basketIdx: number;
    menuIdx: number;
    orderDetailCount: number;
    menuTemperature?: string | null;
    menuSize?: string | null;
  };

  const MenuClick = () => {
    alert("ㅎㅇ");
    if (categoryIdx === 4 || categoryIdx === 5) {
    }
  };

  return (
    <div>
      <div className="px-2 py-1 h-full" onClick={MenuClick}>
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
