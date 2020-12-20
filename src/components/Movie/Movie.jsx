import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movie.css';

class Movie extends Component {



// local state to store information from user's movie

state = {
    title: '',
    poster: '',
    description: '',
    genre: '1'
}   

// must utilizie componentDidMount to fetch all genres
// in order to map out all genres for drop down menu
componentDidMount(){
    this.props.dispatch({type: 'FETCH_GENRE'});
}

// function to bring user back to home
goHome = () => {
    console.log('Inside goHome button')
    this.props.history.push('/');
}

//  handleChange function to handle all input changes 
handleChange = (event, input) => {
    this.setState({
        ...this.state, // spread
        [input]: event.target.value 
        // brackets enables input to act like a variable to store value
    })
}


    render() {
        return (
            <div>
                {/* Utilizing json stringify to render to dom exactly what
                is being sent back from database */}
                {JSON.stringify(this.props.reduxState.genres)};
                {/* button to take user back home */}
                <button onClick={this.goHome}>Go Home</button>
                <br></br>

                {/* applying handleTitle function to input form */}
                <input onChange={this.handleChange}></input>
                {/* button to add title, will dispatch to post with saga then to reducer */}
                <button onClick={this.addMovieDetails}>Add Title</button>
                <br></br>
                <br></br>
                <input onChange={this.handleChange}></input>
                <button onClick={this.addMovieDetails}>Add Poster Url</button>
                <br></br>
                <br></br>
                <input onChange={this.handleChange}></input>
                <button onClick={this.addMovieDetails}>Add Description</button>




            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Movie);
