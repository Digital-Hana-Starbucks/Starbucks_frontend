import { FC } from "react";

interface IProps {
  categoryIdx: number;
  categoryName: string;
  onClick: (idx: number) => void;
}

const Category: FC<IProps> = ({ categoryIdx, categoryName, onClick }) => {
  return (
    <div className="p-2">
      <button
        className="w-32 h-16 bg-white rounded-xl"
        onClick={() => onClick(categoryIdx)}
      >
        {categoryName}
      </button>
    </div>
  );
};

export default Category;
