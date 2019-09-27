import React from "react";
import { Container } from "react-bootstrap";
import ProductsSelection from "../productsSelection";
import ShoppingCart from "../shoppingCart";

const PosFrame = ({
  products,
  itemsInCart,
  toPay,
  addItemToCart,
  removeItemFromCart
}) => {
  return (
    <Container>
      <ProductsSelection products={products} addItemToCart={addItemToCart} />
      <ShoppingCart
        items={itemsInCart}
        toPay={toPay}
        removeItemFromCart={removeItemFromCart}
      />
    </Container>
  );
};

export default PosFrame;
