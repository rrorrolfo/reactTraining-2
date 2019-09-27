import React from "react";
import { Container } from "react-bootstrap";
import ProductsSelection from "../productsSelection";
import ShoppingCart from "../shoppingCart";

const PosFrame = ({ products, itemsInCart }) => {
  return (
    <Container>
      <ProductsSelection products={products} />
      <ShoppingCart items={itemsInCart} />
    </Container>
  );
};

export default PosFrame;
