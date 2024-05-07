import OrderType from "../../types/order";

export interface menuApi {
  getMenuList(): Promise<OrderType[]>;
  getMenu(index: number): Promise<OrderType>;
  deleteMenu(index: number): Promise<void>;
  updateMenu(index: number, newMenu: FormData): Promise<void>;
}
