import React from "react";
import "../../styles/search.css";

const Search = props => (
    <div className="text-center button">
        <button className="btn btn-primary" {...props}>Submit</button>
    </div>
)

export default Search;