import React, { Component } from 'react';
import Header from "./components/Header/header.js";
import Input from "./components/Search/input.js"
import Search from "./components/Search/search.js"
import Results from "./components/Results/results.js"
import Button from "./components/Button/button.js"
import Saves from "./components/Saves/saves.js"
import API from "./utils/API.js"
import "./styles/search.css"

class App extends Component {

  state = {
    article: [],
    saves: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
          this.setState({articles: res.data.response.docs})
          console.log(this.state.articles)
        })
      
        .catch(err => console.log(err));
    } else {
      console.log("Put in a title or date, bro...")
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePostArticle = (id, title, link, date) => {
    API.postArticles(id, {title: title,
    link: link,
  date: date}).then(res => {
      console.log(res.data)}).catch(err => console.log(err))
  }

  componentDidMount() {
    
    API.getSaves().then(res => {this.setState({saves: res.data})
    console.log(res.date)})
  .catch(err => console.log(err))

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h3>Search</h3>
          <hr />
          <Input 
          onChange={this.handleInputChange}
          value={this.state.topic}
          name="topic"
          label="Topic"
          
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.startYear}
            name="startYear"
            label="Start Year"
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.endYear}
            name="endYear"
            label="End Year"
          />
          <Search 
          onClick={this.handleFormSubmit}/>
        </div>
        <div className="container results text-center">
          <h3>Results</h3>
          {(this.state.articles) ? this.state.articles.map(articles => (
          
           <div> 
            <Results 
            key={articles._id}
            title="Title: "
            link="Link: "
            text="Date: "
            snippet={articles.headline.main}
            url={articles.web_url}
            date={articles.pub_date} />
            
            <Button
              id={articles._id}
              key={articles._id}
              onClick={() => this.handlePostArticle(articles._id, articles.headline.main, articles.web_url, articles.pub_date)} />
            </div>
          

            )) : 
                  
          <p>No Results.</p>}         
        </div>
        <div className="container text-center">
          <h3>Saves</h3>
         
        </div>
      </div>
    )
  }
}
    
    export default App;
