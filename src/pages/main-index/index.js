import React, { Component } from 'react';
/* import axios from 'axios'; */


/*==== import Components ====*/
import TopBar from '../../components/top-bar/TopBar'
import Search from '../../components/search-input/Search'
import CardMain from '../../components/card-main/CardMain'


/* const apikey = '6c537dd80af2657e68417972d6a4e357';

const apiUrl = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`,
}) */


export default class mainIndex extends Component {
    /* constructor(){
        super();

        this.state = {
            films: [],
        }
    }

    componentDidMount(){
        this.loadApi();
    }

    loadApi = async () => {
        const answerApi = await apiUrl.get(`/popular?api_key=${apikey}&page=1`);
        const { ...recentMovies } = answerApi.data;
        this.setState({
            films: recentMovies.results
        })
    }; */

  
    render() {

        /* const imgUrlDefault = 'http://image.tmdb.org/t/p/w342/';

        const allmovie = this.state.films.map((movie, index) =>{
            while(index <= 4){
                return( 
                    <div>
                        <h2> {movie.title}</h2>  
                        <img src={ `${imgUrlDefault}${movie.poster_path}` } />
                    </div>
                );
            }
        }) */

        return(
            <div>
                {/* <div>
                    <div class="container">
                        {allmovie}
                    </div>
                </div> */}
        
                <TopBar />
                <div className="wrapper">
                    <Search />
                    <CardMain/>
                </div>
               
            </div>
        );
    }
}
