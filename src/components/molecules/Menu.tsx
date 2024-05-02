import { FC, useEffect, useState } from "react";
import { ApiClient } from "../../apis/apiClient";
import { MenuType } from "../../types/menu";
import { useSession } from "../../context/basketContext";

interface IProps {
  menuIdx: number;
  menuName: string;
  menuImage: string;
  menuPrice: number;
}

const Menu: FC<IProps> = ({ menuIdx, menuName, menuImage, menuPrice }) => {
  const { addBasket } = useSession();

  return (
    <div
      className="px-2 py-1 h-full"
      onClick={() => {
        alert("ㅎㅇ");
      }}
    >
      <img className="rounded-lg w-32 h-32 cursor-pointer" src={menuImage} />
      <div className="flex flex-col justify-between h-20">
        <p className="font-medium text-left line-clamp-2 cursor-pointer">
          {menuName}
        </p>
        <p className="font-medium inline-block text-left w-full cursor-pointer">
          {menuPrice.toLocaleString() + "원"}
        </p>
      </div>
    </div>
  );
};

export default Menu;
