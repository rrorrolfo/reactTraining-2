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

  addItemToCart = code => {
    const { products, itemsInCart } = this.state;
    const productToAdd = products.filter(product => product.code === code);
    this.setState(prevState => {
      return {
        itemsInCart: [...itemsInCart, ...productToAdd],
        toPay: prevState.toPay + productToAdd[0].price
      };
    });
  };

  removeItemFromCart = (code, price) => {
    const { itemsInCart } = this.state;
    const updatedCart = itemsInCart.filter(product => product.code !== code);
    this.setState(prevState => {
      return {
        itemsInCart: [...updatedCart],
        toPay: prevState.toPay - price
      };
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <PosFrame
          products={this.state.products}
          itemsInCart={this.state.itemsInCart}
          toPay={this.state.toPay}
          addItemToCart={this.addItemToCart}
          removeItemFromCart={this.removeItemFromCart}
        />
      </div>
    );
  }
}

export default App;
