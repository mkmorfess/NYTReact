import React from "react"

const Button = props => (
    <div>
        <button {...props}>{props.name}</button>
        <hr/>
    </div>
)

export default Button;