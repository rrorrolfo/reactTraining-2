import React, { Component } from "react";
import NavBar from "../components/header";
import PosFrame from "../components/posFrame";
import products from "../data/products";

import "../styles/app.scss";

class App extends Component {
  state = {
    products: [],
    itemsInCart: [],
    toPay: 0
  };

  componentDidMount() {
    // Get products and update state
    this.setState({ products: [...products] });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PosFrame
          products={this.state.products}
          itemsInCart={this.state.itemsInCart}
        />
      </div>
    );
  }
}

export default App;
