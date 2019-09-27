import React from "react";
import { Container, Table } from "react-bootstrap";
import Total from "../total";
import TableBillRow from "../billRow";

const ShoppingCart = ({ items, toPay }) => {
  return (
    <>
      <h1 className="text">Shopping Cart</h1>
      <Container className="shoppingCart">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <TableBillRow
                name={item.name}
                code={item.code}
                qty={1}
                price={item.price}
              />
            ))}
          </tbody>
        </Table>
        <Total toPay={toPay} />
      </Container>
    </>
  );
};

export default ShoppingCart;
