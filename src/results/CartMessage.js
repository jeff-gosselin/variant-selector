import React from 'react';

const CartMessage = props => {
  const {color, size, edition} = props.item;
  return (
    <div className={props.visible ? 'cart-message' : 'hide'}>
      <h4>The {color}, {size}, {edition} has been added to your cart.</h4>
    </div>
  )
}

export default CartMessage;