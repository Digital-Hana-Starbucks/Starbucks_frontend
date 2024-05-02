import { MenuType } from "../../types/menu";

export interface menuApi {
  getMenuList(): Promise<MenuType[]>;
  getCategoryMenuList(categoryIdx: number): Promise<MenuType[]>;
}
