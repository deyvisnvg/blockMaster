import { Component, createElement } from "../lib/react/index.js";
import Form from './form.js';
import Input from "./input.js";
import Button from "./button.js";
import store from "../store.js";
import { SET_FILTER, SEARCH_MOVIE } from '../actions/index.js'

{/* <section class="wrapper">
        <div class="actions">
            <form action="" id="search-form">
                <input placeholder="Escribe tu película favorita" name="title" type="Busca una pelicula" />
                <button>Buscar</button>
            </form>
            <button id="recommended">Películas recomendadas</button>
            <select name="" id="filter">
                <option value="all">Todas</option>
                <option value="most-valued">Más valoradas</option>
                <option value="least-valued">Menos valoradas</option>
            </select>
        </div>
    </section> */}



class Search extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("🚀 ~ file: search.js ~ line 25 ~ Search ~ event", event)
        const formData = new FormData(event.target) // this hace referencia a search
        const query = formData.get('title');

        if (query) {
            return store.dispatch({
                type: SEARCH_MOVIE,
                payload: query
            })
        }

        return store.dispatch({
            type: SET_FILTER,
            payload: 'all'
        })
    }

    render() {
        return Form({
            id: "search-form",
            onSubmit: this.handleSubmit,
            children: [
                Input({
                    placeholder: "Escribe tu película favorita",
                    name: "title",
                    type: "text"
                }),
                Button({
                    children: createElement('i', { class: 'icon-search' }, null)
                }, '')
            ]
        })
    }
}

export default Search;