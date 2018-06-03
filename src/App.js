import React, { Component } from 'react';
import uuid from 'uuid'; // random number generator

import './App.css'; // component styling
import Header from './components/Header';

class App extends Component {
  
  constructor(props) {
    super(props);
    // define state
    this.state = {
      brand_name: 'Jordan 1',
      brand_style: 'Retro High Homage To Home',
      brand_size: 'Size 8',
      upc_id:uuid.v4()
    }

    // component binding

  }
   
  render() {
    return (
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-md-6">
              <div><strong>Brand Name:</strong> {this.state.brand_name}</div>
              <div><strong>Brand Style:</strong> {this.state.brand_style}</div>
              <div><strong>Brand Size:</strong> {this.state.brand_size}</div>
              <div><strong>UPC ID:</strong> {this.state.upc_id}</div>
              <input onChange={this.onChange} />
            </div>
            <div className="col-md-6">
                <p>Using <strong>Bootstrap 3</strong> for quick CSS layout</p>
                <p>Using the <strong>UUID</strong> to generate random number for upc_id</p>
                <p>Using <strong>fontawesome</strong> for icons</p>
            </div>
          </div>
        </div>
    );
  }

}

export default App;
