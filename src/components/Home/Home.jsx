import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIE'});
    }


    render() {
        return (
            <>
                {/*  */}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Home);