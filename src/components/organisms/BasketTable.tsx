import React from "react";
import { useSession } from "../../hooks/basketContext";

const BasketTable = () => {
  const { basket } = useSession();

  return (
    <div>
      <div className="flex items-center w-full h-8 bg-starbucksBeige">
        <p className="w-3/6 text-left pl-2">메뉴</p>
        <p className="w-1/6">사이즈</p>
        <p className="w-1/6">수량</p>
        <p className="w-1/6">가격</p>
      </div>
      <div className="w-full max-h-48 overflow-y-scroll">
        {basket.basketList.map((item) => (
          <div className="flex">
            <p className="w-3/6 h-7 text-left pl-2">{item.menuName}</p>
            <p className="w-1/6 h-7">{item.menuSize}</p>
            <p className="w-1/6 h-7">{item.orderDetailCount}</p>
            <p className="w-1/6 h-7">
              {item.menuPrice.toLocaleString("ko-KR")}원
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full h-8 bg-starbucksBeige">
        <p className="w-5/6 text-left pl-2">총금액</p>
        <p className="w-1/6 pr-7">
          {basket.totalPrice.toLocaleString("ko-KR")}원
        </p>
      </div>
    </div>
  );
};

export default BasketTable;
