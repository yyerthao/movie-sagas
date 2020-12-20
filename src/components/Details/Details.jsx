import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

componentDidMount(){
    this.props.dispatch({ type: 'FETCH_GENRE'})
}

goHome = () => {
    console.log('Inside goHome function');
    this.props.history.push('/');
}

goToMovie = () => {
    console.log('Going to specific movie');
    this.props.history.push('/movie');
}


    getdetailInfo = (detail) => {
        console.log('Movie detail')
        this.props.dispatch({ type: 'SET_DETAILS', payload: detail})
    }


    render() {
        return (
            <>
            {JSON.stringify(this.props.reduxState.details)}
            <h1> Hello from Details </h1>
            <button onClick={this.goHome}>Back to Home</button>
            <button onClick={this.goToMovie}>Go To Movie</button>

            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Details);
