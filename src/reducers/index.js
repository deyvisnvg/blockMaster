import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from '../actions/index.js';
import {
    movieListAsMap,
    getAllIds,
    getMostValue,
    getLeastValued
} from '../normalize.js';

function filterByTitle(title, movies) {
    console.log(movies);
    const list = [];
    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(title.toLowerCase())) {
            list.push(movie.id)
        }
    })
    return list
}

function findById(id, allIds) {
    const parseId = parseInt(id, 10);
    if (allIds.includes(parseId))
        return [parseId];

    return allIds
}

function searchMovie(query, movies, allIds) {
    if (isNaN(query)) {
        return filterByTitle(query, movies)
    }
    return findById(query, allIds)
}

const reducer = (state, { type, payload }) => {
    // evalúa los compartamientos de mis acciones
    switch (type) {
        case ADD_MOVIES: {
            const movieList = movieListAsMap(payload, state.movieList);
            const all = getAllIds(payload, state.list.all);
            const mostValued = getMostValue(payload, state.list.mostValued);
            const leastValued = getLeastValued(payload, state.list.leastValued);
            return {
                ...state, // aqui me trae todo lo que contiene el array.
                movieList, // me reemplaza el movieList del ...state por este actual.
                list: { // me reemplaza el list del ...state por este actual.
                    ...state.list,
                    all: all,
                    mostValued: mostValued,
                    leastValued: leastValued
                }
            };
        }
        case SET_FILTER:
            return {
                ...state,
                filter: payload
            }
        case SEARCH_MOVIE:
            return {
                ...state,
                filter: 'search',
                list: {
                    ...state.list,
                    search: searchMovie(payload, state.movieList, state.list.all)
                }
            }

        default:
            return state
    }
}

export default reducer