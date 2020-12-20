import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movie.css';


class Movie extends Component {



// local state to store information from user's movie

state = {
    title: '',
    poster: '',
    description: '',
    genre: ''
}   

// must utilizie componentDidMount to fetch all genres
// in order to map out all genres for drop down menu
componentDidMount(){
    this.props.dispatch({type: 'FETCH_GENRE'});
}

// function to bring user back to home
// goHome = () => {
//     console.log('Inside goHome button')
//     this.props.history.push('/');
// }

//  handleChange function to handle all input changes 
handleChange = (event, input) => {
    this.setState({
        ...this.state, // spread
        [input]: event.target.value 
        // brackets enables input to act like a variable to store value
    })
}


// brings user back to landing page, home
cancelSubmit = () => {
    this.props.history.push('/');
// would we dispatch to a reducer to clear array? 
}


// function to collect all details from user and save to DB
submitMovie = () => {
    this.props.dispatch({type: 'POST_MOVIE', payload: this.state});
    this.setState({
        title: '',
        poster: '',
        description: '',
        genre: ''
    })
    // after clicking on button 'Save', go back to main to see if movie was uploaded to list
    this.props.history.push('/');
}


    render() {
        return (
            <div>
                {/* Utilizing json stringify to render to dom exactly what
                is being sent back from database */}
                {JSON.stringify(this.props.reduxState.genres)};
                {/* button to take user back home */}
                {/* <button onClick={this.goHome}>Go Home</button> */}
                <br></br>

                {/* applying handleTitle function to input form */}
                <input placeholder="Title" onChange={(event)=> this.handleChange(event, 'title')}></input>
                {/* button to add title, will dispatch to post with saga then to reducer */}
                <br></br>
                <br></br>
                <input placeholder="Poster URL" onChange={(event)=> this.handleChange(event, 'poster')}></input>
                <br></br>
                <br></br>
                <textarea placeholder="Description" onChange={(event)=> this.handleChange(event, 'description')}></textarea>
                <br></br>
                <br></br>
                <button onClick={this.cancelSubmit}>Cancel</button>
                <button onClick={this.submitMovie}>Save and Submit</button>


                <select value={this.state.genre} onChange={(event)=> this.handleChange(event, 'genre')}></select>




            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Movie);
