import React from "react";

const Results = props => (
    <div>
        <div><span>{props.title}</span> {props.snippet} </div>
        <span>{props.link}</span><a href={props.url}> Read Article </a>
        <div><span>{props.text}</span> {props.date} </div>
        <br />
    </div>
)

export default Results;