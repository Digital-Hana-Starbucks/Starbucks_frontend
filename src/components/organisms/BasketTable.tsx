import React from "react";
import { useSession } from "../../hooks/basketContext";

const BasketTable = () => {
  const { basket } = useSession();

  return (
    <table className="ml-1">
      <thead className="table w-full bg-starbucksBeige">
        <tr>
          <td className="text-left w-[284px]">메뉴</td>
          <td>사이즈</td>
          <td>수량</td>
          <td className="w-[80px]">가격</td>
        </tr>
      </thead>
      <tbody className="block h-48 overflow-y-scroll">
        {basket.basketList.map((item) => (
          <tr className="table w-full h-8">
            <td className="text-left w-[284px]">{item.menuName}</td>
            <td>{item.menuSize}</td>
            <td>{item.orderDetailCount}</td>
            <td className="w-[78px]">
              {item.menuPrice.toLocaleString("ko-KR")}원
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="table w-full bg-starbucksBeige">
        <tr>
          <td className="text-left">총 금액</td>
          <td className="text-right pr-5">
            {basket.totalPrice.toLocaleString("ko-KR")}원
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default BasketTable;
