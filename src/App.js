import React, { Component } from 'react';
import uuid from 'uuid'; // random number generator

import './App.css'; // component styling
// Components
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';
import Shoes from './components/Shoes';
import Form from './components/Form';

class App extends Component {
  
  componentWillMount() {
    //console.log('Will MOunt');
  }

  componentDidMount() {
    //console.log('Did Mount');
  }


  constructor(props) {
    super(props);
    // define state
    this.state = {
      name: 'Initial Brand Name',
      style: 'Initial Brand Style',
      size: 0,
      upcid:'default id'
    }

    // component binding
    this.onClick = this.onClick.bind(this);
  }
   
  onClick() {
    this.setState({
      name: 'New Brand Name',
      style: 'New Brand Style',
      size: 'Brand Size',
      upcid: uuid.v4()
    });
  }

  render() {
    return (
        <div className="fluid-container">
          <Header />
          <div className="row">
            <div className="col-md-9">
              <Shoes 
                name={this.state.name}
                style={this.state.style}
                size={this.state.size}
                upcid={this.state.upcid}
                onClick={this.onClick}
              />
            </div>
            <div className="col-md-3">
                <Info />
            </div>
          </div>
          <hr/>
          <div className="row">
              <div className="col-md-6 col-md-offset-2">
                  <Form />
              </div>
          </div>
          <Footer />
        </div>
    );
  }

}

export default App;
