import React from "react";
import { Button } from "react-bootstrap";

const ProductButton = ({ name, code, addItemToCart }) => {
  return (
    <Button className="productButton" onClick={() => addItemToCart(code)}>
      {name}
    </Button>
  );
};

export default ProductButton;
