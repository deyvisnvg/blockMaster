import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
import MovieList from "./movie-list.js";
import Carrusel from "./carrusel.js";

const AppStyled = styled.div`
    background: #101010;
    color: white;
`

class App extends Component {
    render() {
        return AppStyled({
            children: [
                new Header(),
                new Carrusel({ carrusel: './images/spiderman.jpg' }),
                new MovieList()
            ]
        })
    }
}

export default App;