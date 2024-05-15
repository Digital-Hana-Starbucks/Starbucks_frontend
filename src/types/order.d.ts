export type OrderType = {
  userIdx: number | null;
  userNickname: string | null;
  orderIdx: number;
  orderId: string;
  totalPrice: number;
  orderStatus: string;
  orderDate: string;
};

export type updateOrderType = {
  orderStatus: string;
};

export type createOrderType = {
  menuIdx: number;
  orderDetailCount: number;
  menuTemperature: string | null;
  menuSize: string | null;
};
