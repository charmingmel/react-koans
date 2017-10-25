import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>
    { props.shoes.map((shoe) => (
      <Shoe key={shoe.id} brand={shoe.brand} name={shoe.name} price={shoe.price}/>
    ))}
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;
