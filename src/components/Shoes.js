import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    upcid: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

const defaultProps = {
    name: 'Brand Name',
    style: 'Brand Style',
    size: 'Brand Size',
    upcid: '000000'
}

class Shoes extends Component {
    render() {
        const {name, style, size, upcid, onClick } = this.props;

        return (
            <table className="table">
                <thead> 
                  <tr> 
                    <th><i className="fas fa-trash-alt"></i></th>
                    <th>UPC ID</th> 
                    <th>Brand Name</th> 
                    <th>Brand Style</th> 
                    <th>Brand Size</th>  
                  </tr> 
                </thead>
                <tbody>
                  <tr>
                    <td onClick={onClick}><i className="far fa-trash-alt">Click</i></td>
                    <td>{upcid}</td>
                    <td>{name}</td>
                    <td>{style}</td>
                    <td>{size}</td>
                  </tr>
                </tbody>
              </table>
        );
    }
}

Shoes.propTypes = propTypes;
Shoes.defaultProps = defaultProps;

export default Shoes; 