import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { BasketMenuType } from "../types/menu";

type BasketContextProp = {
  basket: BasketMenuType[];
  // 장바구니에 담는 함수
  addBasket: (menu: BasketMenuType) => void;
  // 장바구니에서 삭제하는 함수
  removeBasket: (basketIdx: number) => void;
  // 장바구니에서 개수 +1하는 함수
  plusMenu: (basketIdx: number) => void;
  // 장바구니에서 개수 -1하는 함수
  minusMenu: (basketIdx: number) => void;
};

type ProviderProps = {
  children: ReactNode;
};

// 앞에 | 지움
type Action =
  | {
      type: "addBasket";
      payload: BasketMenuType;
    }
  | { type: "removeBasket" | "plusMenu" | "minusMenu"; payload: number };

const DefaultBasket: BasketMenuType[] = [];

const BasketContext = createContext<BasketContextProp>({
  basket: [] as BasketMenuType[],
  addBasket: (menu: BasketMenuType) => {},
  removeBasket: (basketIdx: number) => {},
  plusMenu: (basketIdx: number) => {},
  minusMenu: (basketIdx: number) => {},
});

const reducer = (
  basketList: BasketMenuType[],
  { type, payload }: Action,
): BasketMenuType[] => {
  let newer: BasketMenuType[] = [];

  switch (type) {
    case "addBasket":
      newer = [...basketList, payload];
      break;

    case "removeBasket":
      for (let i = 0; i < basketList.length; i++) {
        let menu = basketList[i];
        if (menu.basketIdx == payload) {
          i == basketList.length - 1
            ? (newer = basketList.slice(0, i))
            : (newer = [
                ...basketList.slice(0, i),
                ...basketList.slice(i + 1, basketList.length),
              ]);
          break;
        }
      }
      break;

    case "plusMenu":
      for (let i = 0; i < basketList.length; i++) {
        let menu = basketList[i];
        if (menu.basketIdx == payload) {
          newer = [...basketList];
          newer[i].orderDetailCount++;
          break;
        }
      }
      break;

    case "minusMenu":
      for (let i = 0; i < basketList.length; i++) {
        let menu = basketList[i];
        if (menu.basketIdx == payload) {
          newer = [...basketList];
          newer[i].orderDetailCount--;
          break;
        }
      }
      break;

    default:
      break;
  }

  return newer;
};

export const BasketProvider = ({ children }: ProviderProps) => {
  const [basket, dispatch] = useReducer(reducer, DefaultBasket);

  const addBasket = useCallback((menu: BasketMenuType) => {
    dispatch({ type: "addBasket", payload: menu });
  }, []);

  const removeBasket = useCallback((basketIdx: number) => {
    dispatch({ type: "removeBasket", payload: basketIdx });
  }, []);

  const plusMenu = useCallback((basketIdx: number) => {
    dispatch({ type: "plusMenu", payload: basketIdx });
  }, []);

  const minusMenu = useCallback((basketIdx: number) => {
    dispatch({ type: "minusMenu", payload: basketIdx });
  }, []);

  return (
    <BasketContext.Provider
      value={{ basket, addBasket, removeBasket, plusMenu, minusMenu }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useSession = () => useContext(BasketContext);
