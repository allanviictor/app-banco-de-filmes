import React from 'react';
import './cardMain.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WhiteButton from '../white-button/WhiteButton'
import { Link } from 'react-router-dom'


const CardMain = props =>{

    const imgUrlDefault = 'http://image.tmdb.org/t/p/w342/';
    
    const allmovies = props.films.map((movie, index) =>{
        const numberRating = Math.floor((movie.vote_average * 100) / 10) 
        return ( 
            <Col lg={12} key={index}>
                <Link className="link-movies" to={{ pathname: `/filme/${movie.id}`, state:{ film_id: props.films[index].id } }}>
                    <div key={movie.id} style={{width: '100%'}}>
                        <div className="blog-card" >
                            <div className="photo-section">
                                <img className="photo" src={`${imgUrlDefault}${movie.poster_path}`} alt="thumbnail do filme" />
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
                </Link>
            </Col>
        ) 
    });
    

    return (
        <Container className='mt-5'>
            <Row>
               {allmovies} 
            </Row>
        </Container>
    );
    
}

export default CardMain;