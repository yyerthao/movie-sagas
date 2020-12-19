import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {

goHome = () => {
    console.log('Inside goHome button')
    this.props.history.push('/');
}

addTitle = () => {
    console.log('Adding title')
    
}


    render() {
        return (
            <div>
                <button onClick={this.goHome}>Go Home</button>
                <br></br>
                <h1>Hello from Movie</h1>
                <input onChange={this.handleTitle}></input>
                <button onClick={this.addTitle}>Add Movie Title</button>
                <br></br>
            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Movie);
