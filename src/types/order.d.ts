type OrderType = {
  userIdx: number | null;
  userNickname: string | null;
  orderIdx: number;
  orderId: string;
  totalPrice: number;
  orderStatus: string;
  orderDate: string;
};

type updateOrderType = {
  orderStatus: string;
};

export { OrderType, updateOrderType };
