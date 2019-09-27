import React from "react";
import ProductButton from "../productButton";
import { Container } from "react-bootstrap";

const ProductsSelection = ({ products = [], addItemToCart }) => {
  return (
    <>
      <h1 className="text">Choose a product</h1>
      <Container className="productsContainer">
        {products.map(product => (
          <ProductButton
            name={product.name}
            code={product.code}
            key={product.code}
            addItemToCart={addItemToCart}
          />
        ))}
      </Container>
    </>
  );
};

export default ProductsSelection;
