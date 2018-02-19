import React, { Component } from 'react'
import Home from "./pages/home.js"
import SavedPage from "./pages/saves.js"
import Nav from "./components/Nav/nav.js";
import API from "./utils/API.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saves" component={SavedPage} />
            </Switch>
          </div>
        </Router>;
      </div>     
    )
  }
}
    
    export default App;
