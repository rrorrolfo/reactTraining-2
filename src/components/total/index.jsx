import React from "react";
import { Container } from "react-bootstrap";

const Total = ({ toPay }) => {
  return (
    <Container className="total-topay">
      <div style={{ marginRight: "15px" }}>TOTAL</div>
      <div>{toPay}</div>
    </Container>
  );
};

export default Total;
