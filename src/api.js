import { API_KEY } from './constants.js';

class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
    }
    // Todas las consultas vienen de una URL común
    baseAPI = 'https://api.themoviedb.org/3/';

    get discoverMovie() {
        return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`;
    }

    async moviePage(page) {
        // Tipo de proceso asíncrono, para consultar datos al API / proceso asíncrono Nativa 
        // EL fetch() me devuelve una promesa, y para resolver una promesa lo hacemos con .then() y .catch, pero tambien
        // podríamos definir a la función con async (funcion asíncrona) así de esta manera podríamos guardar a esa promesa dentro de una constante.
        const response = await fetch(`${this.discoverMovie}&page=${page}`);
        const data = await response.json();
        return data;
    }
}

export default new API(API_KEY);