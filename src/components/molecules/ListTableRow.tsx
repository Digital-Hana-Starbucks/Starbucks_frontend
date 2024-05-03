import React from "react";
import TableButton from "./TableButton";
interface Props {
  rowData: any[];
  onDelete?: () => void;
  onEdit?: () => void;
}

const TableRow: React.FC<Props> = ({ rowData, onDelete, onEdit }) => {
  return (
    <tr className="text-xs">
      {rowData.map((cellData, index) => (
        <td key={index} className="border p-2 ">
          {typeof cellData === "string" && cellData.startsWith("http") ? (
            <img src={cellData} alt="menu" className="h-16 w-16" />
          ) : (
            cellData
          )}
        </td>
      ))}
      <td className="border p-2 ">
        {onEdit && (
          <TableButton
            className="bg-blue-500 hover:bg-blue-700 text-white font py-1 px-2 rounded"
            onClick={onEdit}
          >
            수정
          </TableButton>
        )}
      </td>
      <td className="border p-2 ">
        {onDelete && (
          <TableButton
            className="bg-red-500 hover:bg-red-700 text-white font py-1 px-2 rounded"
            onClick={onDelete}
          >
            삭제
          </TableButton>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
