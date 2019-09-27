import React from "react";

const TableBillRow = ({ name, code, qty, price, removeItemFromCart }) => {
  return (
    <tr onClick={() => removeItemFromCart(code, price)}>
      <td>{name}</td>
      <td>{code}</td>
      <td>{qty}</td>
      <td>{price}</td>
    </tr>
  );
};

export default TableBillRow;
