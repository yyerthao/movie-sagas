import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';


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
                        <div className="img-div" key={i}>
                            <h4>{movie.title}</h4>
                            <img 
                                src={movie.poster} 
                                alt="Poster"
                                onClick={() => this.getMovieInfo(movie)}>
                            </img>
                        </div>
                    )
                })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(Home);