import { Component, createElement } from "../lib/react/index.js";
import Select from './select.js';
import store from '../store.js';
import { SET_FILTER } from '../actions/index.js';

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



class Filters extends Component {

    handleChange = (event) => {
        // event.target.value
        store.dispatch({
            type: SET_FILTER,
            payload: event.target.value
        })
    }

    render() {
        return Select({
            id: "filter",
            onChange: this.handleChange,
            children: [
                createElement('option', { value: "all" }, 'Todas'),
                createElement('option', { value: "mostValued" }, 'Más valoradas'),
                createElement('option', { value: "leastValued" }, 'Menos valoradas')
            ]
        })
    }
}

export default Filters;