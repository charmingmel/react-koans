import React from 'react';

const Shoe = (props) => (
  <div>
    <ul>
      <li>{props.name}</li>
      <li>{props.brand}</li>
      <li>{props.price.toFixed(2)}</li>
    </ul>
    <a onClick={() => props.onShoeSelect(props)}>Add to Cart</a>
  </div>
);

// Class Method
// class Shoe extends Component {
//   constructor(props){
//     super(props);
//     this.handleSelect = this.handleSelect.bind(this);
//   }

//   handleSelect() {
//     console.log('this is being clicked')
//     this.props.onShoeSelect(this.props);
//   }

//   render() {
//     const {name, brand, price} = this.props;
//     return (
//       <div>
//         <ul>
//           <li>{name}</li>
//           <li>{brand}</li>
//           <li>{price.toFixed(2)}</li>
//         </ul>
//         <a onClick={this.handleSelect}>Add to Cart</a>
//       </div>
//     );
//   }
// }

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
