import React, { Component } from 'react';
import Header from "./components/Header/header.js";
import Input from "./components/Search/input.js"
import Search from "./components/Search/search.js"
import Results from "./components/Results/results.js"
import "./styles/search.css"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h3>Search</h3>
          <Input />
          <Search />
        </div>
        <div className="container results text-center">
          <h3>Results</h3>
          <Results />
        </div>
      </div>

    );
  }
}

export default App;
