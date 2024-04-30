import MenuType from "../../types/menu";

export interface menuApi {
  getMenuList(): Promise<MenuType[]>;
}
