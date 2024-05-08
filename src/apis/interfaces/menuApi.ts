import { CategoryType } from "../../types/category";
import { MenuType } from "../../types/menu";

export interface menuApi {
  getMenuList(): Promise<MenuType[]>;
  getCategoryMenuList(categoryIdx: number): Promise<MenuType[]>;
  getCategoryList(): Promise<CategoryType[]>;
  getRecommendationList(): Promise<MenuType[]>;
}
