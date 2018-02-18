import React from "react"

const Saves = props => (
    <div className="col-md-12">
        <div><span>{props.title}</span> {props.snippet} </div>
        <span>{props.link}</span><a> {props.url} </a>
        <div><span>{props.text}</span> {props.date} </div>
        <br />
    </div>
)

export default Saves;