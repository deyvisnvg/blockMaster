import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";

const padding = {
    paddingTop: '115px',
    paddingBottom: '35px'
}

const paddingMax= {
    paddingTop: '225px',
    paddingBottom: '10px'
}

class Carrusel extends Component {
    state = {
        paddingValue: false
    }

    setPadding = (event) => {
        if (event.matches) {
            return this.setState({
                paddingValue: true
            })
        }
        this.setState({
            paddingValue: false
        })
    }

    componentDidMount() {
        // Usamos un metodo de window para hacer un media query dentro de Javascript
        const mediaQuery = window.matchMedia('(max-width: 760px)');
        mediaQuery.addEventListener('change', this.setPadding);
        if (mediaQuery.matches) {
            return this.setState({
                paddingValue: true
            })
        }
        // mediaQuery.addListener(this.setPadding)
    }
    render() {
        const { carrusel } = this.props;
        const { paddingValue } = this.state;
        const paddingObj = paddingValue ? paddingMax : padding;

        return Wrapper({
            ...paddingObj,
            children: createElement('img', {
                class: 'poster-carrusel',
                src: carrusel,
                alt: "logo pelicula",
            }, null)
        })
    }
}

export default Carrusel;