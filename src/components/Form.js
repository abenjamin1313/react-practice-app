import React from 'react';

const Form = props => (
    <form onSubmit={props.getShoes}>
        <input type="text" name="brand" placeholder="Shoe Brand..." />
        <input type="text" name="style" placeholder="Brand Style..." />
        <input type="text" name="size" placeholder="Brand Size..." />
        <input type="text" name="upc_id" placeholder="UPC ID..." />
        <button>Get Brand</button>
    </form>
);

export default Form;
