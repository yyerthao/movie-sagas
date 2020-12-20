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
            {/* {JSON.stringify(this.props.reduxState.details)} */}
            <h1> Hello from Details </h1>
                <button onClick={this.goHome}>Back to Home</button>
                <br></br>
            <img src={this.props.reduxState.details.poster} alt="Poster"></img>
            <p>
            {this.props.reduxState.details.description}
            </p>
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Details);
