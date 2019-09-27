import React from "react";
import { Container } from "react-bootstrap";
import ProductsSelection from "../productsSelection";
import ShoppingCart from "../shoppingCart";

const PosFrame = ({ products, itemsInCart, toPay }) => {
  return (
    <Container>
      <ProductsSelection products={products} />
      <ShoppingCart items={itemsInCart} toPay={toPay} />
    </Container>
  );
};

export default PosFrame;
