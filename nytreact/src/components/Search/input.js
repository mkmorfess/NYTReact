import React from "react";
import "../../styles/search.css"

const Input = props => (
    <div className="form-group text-center">
        <label className="input">{props.label}</label>
        <input className="form-control" {...props}/>
    </div>
)

export default Input;