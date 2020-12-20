import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {

// function to bring user back to home
goHome = () => {
    console.log('Inside goHome button')
    this.props.history.push('/');
}

// function to add title to database
// will dispatch action to saga
// saga will post to DB
// response will send to reducer
addTitle = () => {
    console.log('Adding title')
    
}


    render() {
        return (
            <div>
                {/* button to take user back home */}
                <button onClick={this.goHome}>Go Home</button>
                <br></br>
                {/* applying handleTitle function to input form */}
                <input onChange={this.handleTitle}></input>
                {/* button to add title, will dispatch to post with saga then to reducer */}
                <button onClick={this.addTitle}>Add Movie Title</button>
                <br></br>
            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Movie);
