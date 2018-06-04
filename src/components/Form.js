import React from 'react';

const Form = props => (
    <form onSubmit={props.getShoes} className="form-horizontal">
        <div className="form-group">
            <label className="col-sm-2 control-label">Shoe Brand</label>
            <div className="col-sm-10">
                <input className="form-control" type="text" name="brand" placeholder="Shoe Brand..." />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Brand Style</label>
            <div className="col-sm-10">
                <input className="form-control col-sm-8" type="text" name="style" placeholder="Brand Style..." />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Brand Size</label>
            <div className="col-sm-10">
                <input className="form-control col-sm-8" type="text" name="size" placeholder="Brand Size..." />
            </div>
        </div>
        <div className="form-group col-sm-4">
            <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary">Get Brand</button>
            </div>
        </div>
    </form>
);

export default Form;
