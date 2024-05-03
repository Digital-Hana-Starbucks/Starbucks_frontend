import React from "react";
import TableRow from "../molecules/ListTableRow";

interface Props {
  tableData: any[];
  columns: string[];
  onDelete?: (index: number) => void;
  onEdit?: (index: number) => void;
}

const ListTable: React.FC<Props> = ({
  tableData,
  columns,
  onDelete,
  onEdit,
}) => {
  return (
    <table className="table-auto border-collapse w-full border p-2 m-2">
      <thead>
        <tr className="text-sm">
          {columns.map((column, index) => (
            <th className="border p-2" key={index}>
              {column}
            </th>
          ))}
          <th className="border p-2">수정</th>
          <th className="border p-2">삭제</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowData={rowData}
            onDelete={() => onDelete && onDelete(rowIndex)}
            onEdit={() => onEdit && onEdit(rowIndex)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
