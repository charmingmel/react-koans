import React from 'react';

const Shoe = (props) => (
  <ul>
    <li>{props.name}</li>
    <li>{props.brand}</li>
    <li>{props.price.toFixed(2)}</li>
  </ul>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
