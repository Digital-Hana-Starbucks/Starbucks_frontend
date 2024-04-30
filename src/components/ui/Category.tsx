import { FC } from "react";

interface IProps {
  categoryIdx: number;
  categoryName: string;
}

const Category: FC<IProps> = ({ categoryIdx, categoryName }) => {
  const setMenus = (categoryIdx: number) => {
    // react-query를 사용해서 메뉴리스트 카테고리별로 갱신
  };

  return <div>dasd</div>;
};

export default Category;
