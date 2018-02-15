import React from "react";
import "../../styles/search.css"

const Input = props => (
    <div className="form-group text-center">
        <label className="input">Topic</label>
        <input className="form-control" {...props} />
        <label className="input">Start Year</label>
        <input className="form-control" {...props} />
        <label className="input">End Year</label>
        <input className="form-control" {...props} />
    </div>
)

export default Input;