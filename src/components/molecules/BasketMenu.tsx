import { FC, useEffect, useState } from "react";
import { BasketMenuType, MenuType } from "../../types/menu";
import { useSession } from "../../context/basketContext";

interface IProps {
  basketIdx: number;
  menuIdx: number;
  menuPrice: number;
  menuName: string;
  menuImage: string;
  orderDetailCount: number;
  menuTemperature?: string | null;
  menuSize?: string | null;
}

const BasketMenu: FC<IProps> = ({
  basketIdx,
  menuIdx,
  menuName,
  menuPrice,
  menuImage,
  orderDetailCount,
  menuTemperature,
  menuSize,
}) => {
  const { removeBasket, plusMenu, minusMenu } = useSession();

  const clickMinus = () => {
    if (orderDetailCount <= 1) {
      return;
    }
    minusMenu(basketIdx);
  };

  const clickPlus = () => {
    plusMenu(basketIdx);
  };

  return (
    <div className="pl-2 py-2 pr-1 flex flex-col justify-center w-64 h-20 bg-starbucksBeige rounded-lg">
      <div className="flex justify-end">
        <img
          className="flex w-3 h-3 cursor-pointer bg-black rounded-lg"
          src="./../../public/img/closeWhite.png"
          onClick={() => removeBasket(basketIdx)}
        />
      </div>
      <div className="flex w-full">
        <img className="w-14 h-16 rounded-xl" src={menuImage} />
        <div className="pl-2 py-1 flex flex-col justify-between w-full">
          <p className="flex text-sm line-clamp-1">{menuName}</p>
          <div className="flex w-full justify-between">
            <p className="text-sm">
              {(menuPrice * orderDetailCount).toLocaleString()}원
            </p>
            <div className="flex">
              <div
                className="flex justify-center items-center w-5 h-5 border-2 border-gray-200 bg-white cursor-pointer"
                onClick={() => clickMinus()}
              >
                -
              </div>
              <div className="flex justify-center items-center w-5 h-5 border-2 border-gray-200">
                {orderDetailCount}
              </div>
              <div
                className="flex justify-center items-center w-5 h-5 border-2 border-gray-200 bg-white cursor-pointer"
                onClick={() => clickPlus()}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketMenu;
