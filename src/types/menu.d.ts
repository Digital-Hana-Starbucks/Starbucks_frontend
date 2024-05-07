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
  menuName: string;
  menuPrice: number;
  menuImage: string;
  orderDetailCount: number;
  menuTemperature?: string | null;
  menuSize?: string | null;
};
type BasketType = {
  totalPrice: number;
  basketList: BasketMenuType[];
};

export { MenuType, BasketMenuType, BasketType };
