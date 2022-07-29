import { createStore } from './redux/index.js';
import reducer from './reducers/index.js';
import movies from "./movies.js";
import {
    movieListAsMap,
    getAllIds,
    getMostValue,
    getLeastValued
} from "./normalize.js";

const initialState = {
    movieList: movieListAsMap(movies),
    filter: 'all',
    list: {
        all: getAllIds(movies),
        mostValued: getMostValue(movies),
        leastValued: getLeastValued(movies)
    }
}

const store = createStore(
    reducer,
    initialState
)
// store.dispatch() //Enviar Acciones
// store.getState() //Estado de la aplicacion
// store.subscribe()

export default store