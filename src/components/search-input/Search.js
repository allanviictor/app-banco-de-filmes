import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
     
    }

    render(props) {
        return (
            <form  method="GET" onSubmit={this.props.propsubmit}>
                <input type="text" onChange={this.props.proponchange} onKeyUp={this.props.propkeyup} className="input-search" placeholder="Busque um filme por nome, ano ou gênero..."/>
            </form>
        );
    }
}

export default Search;