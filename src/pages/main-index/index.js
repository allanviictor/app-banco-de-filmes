import React, { Component } from 'react';
import TopBar from '../../components/top-bar/TopBar'
import Search from '../../components/search-input/Search'
import CardMain from '../../components/card-main/CardMain'
import { baseUrl, apikey } from '../../services/api'


export default class mainIndex extends Component {
    constructor(){
        super();
        this.state = {
            films: [],
            idFilms: []
        }
    }

    search_films = (url) =>{
        fetch(url)
        .then(resp => { return resp.json() })
        .then(resp => {
            const { ...recentMovies } = resp
            const getIdFilms = recentMovies.results.map((item) => item.id)
            this.setState({
                films: recentMovies.results,
                idFilms: getIdFilms
            })
        })
    }

    componentDidMount(){
        this.search_films(`${baseUrl}movie/popular?api_key=${apikey}&language=pt-BR`)
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.search_films(`${baseUrl}search/movie?api_key=${apikey}&language=pt-BR&include_adult=false&query=${this.state.searchTerm}`)
        console.log(`value enviado: ${this.state.searchTerm}`)
    }

    handleOnKeyUp = event => {
        this.setState({
            searchTerm: event.target.value
        })
        if(this.state.searchTerm == ''){
            this.search_films(`${baseUrl}movie/popular?api_key=${apikey}&language=pt-BR`)
        }
    }

    render() {
        return(
            <div>
                <TopBar />
                <div className="wrapper">
                    <Search propsubmit={this.handleSubmit} proponchange={this.handleChange} propkeyup={this.handleOnKeyUp}/>
                    <CardMain films={this.state.films} films_id={this.state.idfilms}/>
                </div>
            </div>
        );
    }
}
