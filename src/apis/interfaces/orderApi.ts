import { OrderType, createOrderType } from "../../types/order";

export interface orderApi {
  getOrderList(): Promise<OrderType[]>;
  deleteOrder(index: number): Promise<void>;
  updateOrder(index: number, newMenu: OrderType): Promise<void>;
  createOrder(order: createOrderType[]): Promise<void>;
}
