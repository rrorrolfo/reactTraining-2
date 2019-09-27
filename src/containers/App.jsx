import React, { Component } from "react";
import NavBar from "../components/header";
import ProductsSelection from "../components/productsSelection";
import ShoppingCart from "../components/shoppingCart";
import products from "../data/products";

import "../styles/app.scss";

class App extends Component {
  state = {
    products: [],
    itemsInCart: []
  };

  componentDidMount() {
    // Get products and update state
    this.setState({ products: [...products] });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ProductsSelection products={this.state.products} />
        <ShoppingCart items={this.state.itemsInCart} />
      </div>
    );
  }
}

export default App;
