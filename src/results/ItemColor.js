import React, { Component } from "react";
import ItemImage from "./ItemImage";

class ItemColor extends Component {
  render() {
    let colors = this.props.colors.map(color => (
      <ItemImage
        variant={color}
        selected={this.props.selected.color}
        handleColor={this.props.handleColor}
        key={color.id}
      />
    ));
    return (
      <div>
        <p className="label">Colour: {this.props.selected.color}</p>
        <div className="item-colors">{colors}</div>
      </div>
    );
  }
}

export default ItemColor;
