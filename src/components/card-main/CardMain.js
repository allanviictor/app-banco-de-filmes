import React, { Component } from 'react';
import './cardMain.css'
import axios from 'axios';
import WhiteButton from '../white-button/WhiteButton'


const apikey = '6c537dd80af2657e68417972d6a4e357';

const apiUrl = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})


class CardMain extends Component {
    constructor(){
        super();
        this.state = {
            films: [],
            idFilms: []
        }
    }

    componentDidMount = async () => {
       const answerApi = await apiUrl.get(`movie/popular?api_key=${apikey}&language=pt-BR`)
       const { ...recentMovies } = answerApi.data

        const getIdFilms = recentMovies.results.map((item) => item.id)
        this.setState({
            films: recentMovies.results,
            idFilms: getIdFilms
        })
        /* console.log(answerApi) */
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