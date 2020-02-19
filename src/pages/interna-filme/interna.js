import React, {Component} from 'react';
import { baseUrl, apikey } from '../../services/api'


class PageInterna extends Component{

    constructor(props){
        super()
        this.state = {
            currentFilm: {}
        }
    }

    componentDidMount = async () => {
        const request = await fetch(`${baseUrl}movie/${this.props.location.state.film_id}?api_key=${apikey}&language=pt-BR`)
        const resp = await request.json()
        this.setState({
            currentFilm: resp
        })
        
        console.log(this.state.currentFilm)
    }


    render(){

        const filmState = this.state.currentFilm
        
        return(
            <div>
                {filmState.overview}
            </div>
        );

    }


}
/* 
const PageInterna = (props) => {

    console.log(props)
    const [currentFilm, setCurrentFilm] = useState()



    useEffect(()=>{
        async function getCurrentFilm(){
            const request = await fetch(`${baseUrl}movie/${props.location.state.film_id}?api_key=${apikey}&language=pt-BR`)

            const resp = await request.json()
            resp.then(data=>{
                setCurrentFilm(data)
            });

            console.log(currentFilm)
        }
        getCurrentFilm()
    },[])





   
    return(
        <div>
            <h3>
                interna
            </h3>
        </div>
        
    );
} */

export default PageInterna;