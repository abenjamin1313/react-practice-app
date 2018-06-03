import React, { Component } from 'react';
import uuid from 'uuid'; // random number generator

import './App.css'; // component styling
// Components
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';

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
    this.onClick = this.onClick.bind(this);
  }
   
  onClick() {
    this.setState({

    });
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
              <div onClick={this.onClick}>CLick Here</div>
            </div>
            <div className="col-md-6">
                <Info />
            </div>
          </div>
          <Footer />
        </div>
    );
  }

}

export default App;
