import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
            <Container>
                <Row>
                    <Col lg={12}>
                        <form  method="GET" className="d-flex mt-5" onSubmit={this.props.propsubmit}>
                            <input type="text" onChange={this.props.proponchange} onKeyUp={this.props.propkeyup} className="input-search" placeholder="Busque um filme por nome, ano ou gênero..."/>
                            <Button type="submit" className="ml-3 btn-search">Pesquisar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;