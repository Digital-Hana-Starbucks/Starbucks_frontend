import React from "react";
import { useSession } from "../../context/basketContext";

const BasketTable = () => {
  const { basket } = useSession();

  return (
    <table className="ml-1">
      <thead className="bg-starbucksBeige">
        <tr>
          <td className="text-left">메뉴</td>
          <td>사이즈</td>
          <td>수량</td>
          <td>가격</td>
        </tr>
      </thead>
      <tbody className="h-48 max-h-48">
        {basket.basketList.map((item) => (
          <tr>
            <td className="text-left">{item.menuName}</td>
            <td>{item.menuSize}</td>
            <td>{item.orderDetailCount}</td>
            <td>{item.menuPrice}</td>
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-starbucksBeige">
        <tr>
          <td className="text-left" colSpan={3}>
            총 금액
          </td>
          <td>{basket.totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default BasketTable;
