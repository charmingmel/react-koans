import React from 'react';

const CartSummary = (props) => {
  let total = 0;
  return (
    <div className="CartSummary">
      {
        props.cart.map((item) => {
          let price = item.price ? item.price : 0;
          total += price;
          return null;
        })
      }
      <span id="ItemCount">{props.cart.length}</span>
      <span id="TotalCost">{total.toFixed(2)}</span>
    </div>
  );
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;
