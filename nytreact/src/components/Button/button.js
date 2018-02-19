import React from "react"

const Button = props => (
    <div>
        <button {...props}>{props.name}</button>
        <br />
    </div>
)

export default Button;