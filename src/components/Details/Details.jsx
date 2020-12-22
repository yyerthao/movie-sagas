import React, { Component } from 'react';
import './Details.css'
;import { connect } from 'react-redux';

class Details extends Component {

// will render user's movie they've chosen from home page right away
componentDidMount(){
    this.props.dispatch({ type: 'FETCH_GENRE'})
}

// function to bring user back to home
goHome = () => {
    console.log('Inside goHome function');
    this.props.history.push('/');
}

// function to bring user to movie view


// function to 
getdetailInfo = (details) => {
    console.log('Movie detail')
    this.props.dispatch({ type: 'SET_DETAILS', payload: details})
}


    render() {
        return (
            <>
            {/* Utilizie JSON.stringify to ensure array is retrieved correctly */}
            {/* {JSON.stringify(this.props.reduxState.details)} */}
            <button onClick={this.goHome}>Back to Home</button>
            <br></br>
            <h2>{this.props.reduxState.details.title}</h2>
            <img 
                src={this.props.reduxState.details.poster} 
                alt="Poster">
            </img>
            <p>
                {this.props.reduxState.details.description}
            </p>
                {this.props.reduxState.details.genre}
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Details);
