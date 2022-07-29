import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";
import Movie from "./movie.js";
import store from "../store.js";
import api from "../api.js"
import { ADD_MOVIES } from "../actions/index.js";

{/* <div class="wrapper">
    <section class="movie-list" id="container">
        <article class="movie recommended">
            <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg" alt="">
                <p class="movie-title">Duro de matar</p>
                <p class="movie-id">123456</p>
                <span class="movie-rate">10</span>
        </article>
    </section>
</div> */}

// .movie-list {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, 200px);
//     justify-content: center;
//     box-sizing: border-box;
//     gap: 1em;
//   }


const MovieListStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    box-sizing: border-box;
    gap: 1em;
`

class MovieList extends Component {
    state = {
        page: 1
    }
    getPage = async page => {
        const { results } = await api.moviePage(page);
        store.dispatch({
            type: ADD_MOVIES,
            payload: results
        })
    }

    handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
            this.getPage(this.state.page);
            this.setState({
                page: this.state.page + 1
            })
        }
        // console.log(entries);
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState();
        })

        // Ha IntersectionObserver se le pasa un callback y objeto de configuration
        const observer = new IntersectionObserver(this.handleIntersection)
        observer.observe(window.intersector);
        // debugger
    }

    render() {
        const state = store.getState();
        const movieListId = state.list[state.filter]
        const movieList = state.movieList; // {1=>{}, 2=>{}, 3=>{}}

        return Wrapper({
            children: [
                createElement('h1', null, 'Todas las películas'),
                MovieListStyled({
                    // Aqui retorna la instancia new Movie() enviando como parámetro
                    // un objeto {} segun el id encontrado. Este objeto sera la props
                    // en la clase Movie
                    children: movieListId.map(id => new Movie(movieList.get(id)))
                })
            ]
        })
    }
}

export default MovieList;