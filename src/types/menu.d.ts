type MenuType = {
  menuIdx: number;
  menuId: string;
  menuName: string;
  menuPrice: number;
  menuImage: string;
  menuDate: string;
  categoryIdx: number;
};
type BasketMenuType = {
  basketIdx: number;
  menuIdx: number;
  orderDetailCount: number;
  menuTemperature?: string | null;
  menuSize?: string | null;
};

export { MenuType, BasketMenuType };
