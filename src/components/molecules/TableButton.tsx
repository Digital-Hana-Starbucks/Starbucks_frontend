import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const TableButton: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default TableButton;
