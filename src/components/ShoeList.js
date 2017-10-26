import React from 'react';
import Shoe from './Shoe';

const ShoeList = ({shoes, onShoeSelect}) => (
  <div>
    {
      shoes.map((shoe) => (
        <Shoe key={shoe.id}
          brand={shoe.brand}
          name={shoe.name}
          price={shoe.price}
          onShoeSelect={() => onShoeSelect(shoe)}
        />
      ))
    }
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;
