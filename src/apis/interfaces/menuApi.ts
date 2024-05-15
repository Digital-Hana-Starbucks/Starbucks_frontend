import { CategoryType } from "../../types/category";
import { MenuType } from "../../types/menu";

export interface menuApi {
  getMenuList(): Promise<MenuType[]>;
  getMenu(index: number): Promise<MenuType>;
  deleteMenu(index: number): Promise<void>;
  updateMenu(index: number, newMenu: FormData): Promise<void>;
  getCategoryMenuList(categoryIdx: number): Promise<MenuType[]>;
  getCategoryList(): Promise<CategoryType[]>;
  getRecommendationList(): Promise<MenuType[]>;
}
