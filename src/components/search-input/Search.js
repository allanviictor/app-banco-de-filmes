import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    render() {
        return (
            <form>
                <input type="search" className="input-search" placeholder="Busque um filme por nome, ano ou gênero..."/>
            </form>
        );
    }
}

export default Search;