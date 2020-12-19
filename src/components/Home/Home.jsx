import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIE'});
    }


    render() {
        return (
            <>
                {this.props.reduxState.movies.map ((movie, i) => {
                    return(
                        <div key={i}>
                            <p>{movie.title}</p>
                            <img src={movie.poster} alt="Poster"></img>
                            <p>{movie.description}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Home);