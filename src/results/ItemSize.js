import React, { Component } from "react";

class ItemSize extends Component {
  state = {
    hidden: true
  }

  displayToggle = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
      <div className="item-sizes">
        <div className="item-sizes-labels">
          <p className="label">Size</p>
          <div className="label uline" onMouseEnter={this.displayToggle} onMouseLeave={this.displayToggle}>
            Size Guide
            <div className={this.state.hidden ? 'hide' : 'size-guide'}>
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Depth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30 Litres</td>
                    <td>45cm</td>
                    <td>35cm</td>
                    <td>25cm</td>
                  </tr>
                  <tr>
                    <td>60 Litres</td>
                    <td>65cm</td>
                    <td>55cm</td>
                    <td>30cm</td>
                  </tr>
                  <tr>
                    <td>90 Litres</td>
                    <td>75cm</td>
                    <td>60cm</td>
                    <td>35cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          onClick={this.props.handleSize}
          className={
            this.props.selected === "30 Litres" ? "size-selection" : null
          }
        >
          30 Litres
        </button>
        <button
          onClick={this.props.handleSize}
          className={
            this.props.selected === "60 Litres" ? "size-selection" : null
          }
        >
          60 Litres
        </button>
        <button
          onClick={this.props.handleSize}
          className={
            this.props.selected === "90 Litres" ? "size-selection" : null
          }
        >
          90 Litres
        </button>
      </div>
    );
  }
}

export default ItemSize;
