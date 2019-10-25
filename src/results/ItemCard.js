import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import { FaAngleRight } from "react-icons/fa";
import ItemColor from "./ItemColor";
import ItemSize from "./ItemSize";
import ItemEdition from "./ItemEdition";
import ItemDesc from "./ItemDesc";
import CartMessage from "./CartMessage";

// import {  } from "tabler-react";

class ItemCard extends Component {
  state = {
    colors: [
      {
        id: 1,
        color: "Blue",
        image:
          "https://images.jansport.com/is/image/JanSport/T501_54B_front?$S7product$&fmt=png-alpha"
      },
      {
        id: 2,
        color: "Orange",
        image:
          "https://images.jansport.com/is/image/JanSport/T501_47A_front?$S7product$&fmt=png-alpha"
      }
    ],
    colorSelected: "",
    sizeSelected: "30 Litres",
    editionSelected: "Extreme Edition",
    cartMessage: false,
    item: {}
  };

  handleColor = (e, selected) => {
    this.setState({
      colorSelected: selected
    });
  };

  handleSize = e => {
    this.setState({
      sizeSelected: e.target.innerText
    });
  };

  handleEdition = e => {
    this.setState({
      editionSelected: e.target.value
    });
  };

  addToCart = () => {
    let item = {
      color: this.state.colorSelected.color,
      size: this.state.sizeSelected,
      edition: this.state.editionSelected
    };

    this.setState({
      cartMessage: true,
      item: item
    });
  };

  componentDidMount() {
    this.setState({
      colorSelected: this.state.colors[0]
    });
  }

  render() {
    return (
      <div id="item-card">
        <div className="breadcrumbs">
          <h3>store</h3>
          <FaAngleRight className="arrow" />
          <h3>mens</h3>
          <FaAngleRight className="arrow" />
          <h3 className="current">climbing</h3>
        </div>

        <h1>Trion Light 38 Backpack</h1>
        <p>
          $112 <del>$159.95</del>
        </p>
        <ItemColor
          colors={this.state.colors}
          selected={this.state.colorSelected}
          handleColor={this.handleColor}
        />

        <ItemSize
          selected={this.state.sizeSelected}
          handleSize={this.handleSize}
        />

        <ItemEdition handleEdition={this.handleEdition} />

        <button className="cart-btn" onClick={this.addToCart}>
          Add to Cart
        </button>
        <CartMessage item={this.state.item} visible={this.state.cartMessage} />
        <ItemDesc />
      </div>
    );
  }
}

export default ItemCard;
