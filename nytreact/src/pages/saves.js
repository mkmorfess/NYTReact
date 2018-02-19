import React, { Component } from 'react';
import Results from "./../components/Results/results.js"
import Button from "./../components/Button/button.js"
import Saves from "./../components/Saves/saves.js"
import API from "./../utils/API.js"
import "./../styles/search.css"

class SavedPage extends Component {

    state = {
        saves: []
    };


    handleDeleteArticle = id => {
        API.deleteArticles(id).then(res => console.log(res.data))
    
        API.getSaves().then(res => {
          this.setState({ saves: res.data })
          console.log(res.data)
        })
          .catch(err => console.log(err))
    }
    
    
    componentDidMount() {
    console.log(this.state.saves)
    
    API.getSaves().then(res => {this.setState({saves: res.data})
    console.log(res.data)})
    .catch(err => console.log(err))

    }


    render() {
        return (
            <div>
                <div className="container text-center">
                <h3>Saves</h3>
                <hr />
                {(this.state.saves.length > 0) ? this.state.saves.map(saves => ( 
                    <div>
                    <Saves
                        key={saves._id}
                        title="Title: "
                        link="Link: "
                        text="Date: "
                        snippet={saves.title}
                        url={saves.url}
                        date={saves.date} />
                        <Button 
                        key={saves._id}
                        name="Delete"
                        onClick={() => this.handleDeleteArticle(saves._id)}/>
                    </div>
                )) : <div>No Saves</div> }
                </div>
            </div>
            
        )
    }
}

export default SavedPage