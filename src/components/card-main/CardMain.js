import React, { Component } from 'react';
import './cardMain.css'
import WhiteButton from '../white-button/WhiteButton'


class CardMain extends Component {

    render() {

        const imgUrlDefault = 'http://image.tmdb.org/t/p/w342/';

        const allmovies = this.props.films.map((movie, index) =>{
            const numberRating = (movie.vote_average * 100) / 10
            return( 
                <div key={movie.id}>
                    <div className="blog-card" >
                        <div className="photo-section">
                            <img className="photo" src={`${imgUrlDefault}${movie.poster_path}`} />
                        </div>
                        <div className="description">
                            <div className="wrapper-title-movie">
                                <h3 className="title">{movie.title}</h3>
                                <div className="circle-rate" >
                                    {numberRating + '%'} 
                                </div>
                            </div>
                            <div>
                                <p className="date-movie">{movie.release_date}</p>
                            </div>
                            <p className="description-content">
                                {movie.overview}
                            </p>
                            <WhiteButton genreId={movie.genre_ids} />
                        </div>
                    </div>
                </div>
            );
        })

        return (
            <div>
                {allmovies}
            </div>
        );
    }
}

export default CardMain;