import React from "react";

const TableBillRow = ({ name, code, qty, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{code}</td>
      <td>{qty}</td>
      <td>{price}</td>
    </tr>
  );
};

export default TableBillRow;
