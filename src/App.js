import React, { Component } from 'react';
import uuid from 'uuid'; // random number generator

import './App.css'; // component styling
// Components
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';
import Shoes from './components/Shoes';

class App extends Component {
  
  constructor(props) {
    super(props);
    // define state
    this.state = {
      brand_name: 'Jordan 1',
      brand_style: 'Retro High Homage To Home',
      brand_size: 8,
      upc_id:uuid.v4()
    }

    // component binding
    this.onClick = this.onClick.bind(this);
  }
   
  onClick() {
    this.setState({
      brand_name: 'New Brand Name'
    });
  }

  render() {
    return (
        <div className="fluid-container">
          <Header />
          <div className="row">
            <div className="col-md-9">
              <Shoes 
                name={this.state.brand_name}
                style={this.state.brand_style}
                size={this.state.brand_size}
                upcid={this.state.upc_id}
                onClick={this.onClick}
              />
            </div>
            <div className="col-md-3">
                <Info />
            </div>
          </div>
          <Footer />
        </div>
    );
  }

}

export default App;
