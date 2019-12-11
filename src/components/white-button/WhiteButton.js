import React from 'react';
import "./whiteButton.css";

const generes = [
    {id: 28, name: "Ação"},
    {id: 12, name: "Aventura"},
    {id: 16, name: "Animação"},
    {id: 35, name: "Comédia"},
    {id: 80, name: "Crime"},
    {id: 99, name: "Documentário"},
    {id: 18, name: "Drama"},
    {id: 10751, name: "Família"},
    {id: 14, name: "Fantasia"},
    {id: 36, name: "História"},
    {id: 27, name: "Terror"},
    {id: 10402, name: "Música"},
    {id: 9648, name: "Mistério"},
    {id: 10749, name: "Romance"},
    {id: 878, name: "Ficção científica"},
    {id: 10770, name: "Cinema TV"},
    {id: 53, name: "Suspense"},
    {id: 10752, name: "Guerra"},
    {id: 37, name: "Faroeste"},
]


const WhiteButton = props => {

    const listArr = generes.reduce((obj, item) => ((obj[item.id] = item.name), obj),{});
    const newListArr = Object.assign(listArr);
        
    return (
        <div className="wrapper-white-button">
            {
                props.genreId.map((item) => 
                    (
                        <div className="white-button" key={item}>
                            {newListArr[item]}
                        </div>
                    )
                )  
            }
        </div>
    );
}

export default WhiteButton;