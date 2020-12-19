import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

goHome = () => {
    console.log('Inside goHome function');
    this.props.history.push('/');
}

goToMovie = () => {
    console.log('Going to specific movie');
    this.props.history.push('/movie');
}


    render() {
        return (
            <>
            <h1> Hello from Details </h1>
            <button onClick={this.goHome}>Back to Home</button>
            <button onClick={this.goToMovie}>Go To Movie</button>
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Details);
