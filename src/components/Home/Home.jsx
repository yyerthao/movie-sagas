import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIE'});
    }

    getMovieInfo = (movie) => {
    console.log('Getting movie details')
    this.props.dispatch({type: 'SET_DETAILS', payload: movie})
    this.props.history.push('/details')
    }

    render() {
        return (
            <>
                {this.props.reduxState.movies.map ((movie, i) => {
                    return(
                        <div key={i}>
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt="Poster"
                                onClick={() => this.getMovieInfo(movie)}>
                            </img>
                            {/* <p>{movie.description}</p> */}
                        </div>
                    )
                })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Home);