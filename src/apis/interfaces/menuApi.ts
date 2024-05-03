import MenuType from "../../types/menu";

export interface menuApi {
  getMenuList(): Promise<MenuType[]>;
  getMenu(index: number): Promise<MenuType>;
}
