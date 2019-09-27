import React from "react";
import { Button } from "react-bootstrap";

const ProductButton = ({ name, code }) => {
  return (
    <Button className="productButton" code={code}>
      {name}
    </Button>
  );
};

export default ProductButton;
