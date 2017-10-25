import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList'
import Api from './api';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api.getShoes()
      .then((data) => {
        this.setState({ shoes: data });
      });
  }

  handleShoeSelect (shoe) {

  }

  render() {
    return (
      <div>

        <NavBar title="Hello World"/>

        <div className="row">

          <div className="col s3">
            I am the left pane
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} />
          </div>

          <div className="col s3">
            Right?
          </div>

        </div>
      </div>

    );
  }
}

export default App;
