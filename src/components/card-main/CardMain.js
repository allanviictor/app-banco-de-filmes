import React, { Component } from 'react';
import './cardMain.css'
import { baseUrl, apikey } from '../../services/api'
import WhiteButton from '../white-button/WhiteButton'


class CardMain extends Component {
    constructor(){
        super();
        this.state = {
            films: [],
            idFilms: []
        }
    }

    componentDidMount(){
        fetch(`${baseUrl}movie/popular?api_key=${apikey}&language=pt-BR`)
        .then(resp => { return resp.json() })
        .then((resp)=>{
            const { ...recentMovies } = resp
            const getIdFilms = recentMovies.results.map((item) => item.id)
            console.log(recentMovies)
            this.setState({
                films: recentMovies.results,
                idFilms: getIdFilms
            })
        })
    
    }

    

    render() {

        const imgUrlDefault = 'http://image.tmdb.org/t/p/w342/';

        const allmovies = this.state.films.map((movie, index) =>{
            const numberRating = (movie.vote_average * 100) / 10
            while(index <= 3){
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
                                <WhiteButton  genreId={movie.genre_ids} />
                            </div>
                        </div>
                    </div>
                );
            }
        })

        return (
            <div>
                {allmovies}
            </div>
        );
    }
}

export default CardMain;