import React, { Component } from "react";

class ItemEdition extends Component {
  render() {
    return (
      <div>
        <p className="label">Dropdown</p>
        <select className="item-edition" name="edition" onChange={this.props.handleEdition}>
          <option value="Extreme Edition">Extreme Edition</option>
          <option value="Supreme Edition">Supreme Edition</option>
        </select>
      </div>
    )
  }
}

export default ItemEdition;