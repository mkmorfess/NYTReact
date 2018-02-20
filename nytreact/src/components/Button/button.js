import React from "react"

const Button = props => (
    <div>
        <button className="btn btn-primary" {...props}>{props.name}</button>
        <br />
    </div>
)

export default Button;