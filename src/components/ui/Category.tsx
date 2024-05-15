import { FC } from "react";

interface IProps {
  categoryIdx: number;
  categoryName: string;
  onClick: (idx: number) => void;
}

const Category: FC<IProps> = ({ categoryIdx, categoryName, onClick }) => {
  const nameArr = categoryName.split("/");
  let newName = nameArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue + "\n";
  }, "");
  newName.substring(0, newName.length - 1);

  return (
    <li className="p-2">
      <button
        className="w-32 h-16 bg-white rounded-xl"
        onClick={() => onClick(categoryIdx)}
      >
        <p className="whitespace-pre">{newName}</p>
      </button>
    </li>
  );
};

export default Category;
