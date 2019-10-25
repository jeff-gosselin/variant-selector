import React from "react";

const ItemImage = props => {
  return (
    <div
      className={
        props.variant.color === props.selected
          ? "item-image color-selection"
          : "item-image"
      }
      onClick={e => props.handleColor(e, props.variant)}
    >
      <img src={props.variant.image} alt="" />
    </div>
  );
};

export default ItemImage;
