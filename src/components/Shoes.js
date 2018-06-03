import React, { Component } from 'react';

class Shoes extends Component {
    render() {
        
        return (
            <table className="table">
                <thead> 
                  <tr> 
                    <th><i class="fas fa-trash-alt"></i></th>
                    <th>UPC ID</th> 
                    <th>Brand Name</th> 
                    <th>Brand Style</th> 
                    <th>Brand Size</th>  
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td onClick={this.onClick}><i class="far fa-trash-alt"></i></td>
                    <td>{this.props.upcid}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.style}</td>
                    <td>{this.props.size}</td>
                  </tr>
                </tbody>
              </table>
        );
    }
}

export default Shoes; 