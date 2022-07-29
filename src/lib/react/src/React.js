class Component {
    constructor(props = {}, state = {}) { //props = {} --> Parameter default
        this.props = props;
        this.state = state;
    }

    // Cuando el componente se va ha reenderizar
    componentWillMount() {

    }

    // Cuando el componente se reenderizó
    componentDidMount() {

    }

    // El componente se actualiza
    componentDidUpdate() {

    }

    // Esto es una funcion que dice que esta vacía pero en realidad esta
    // siendo reemplazada por una funcion distinta desde el react-dom.js (element.update = reRender)
    update() { }
    #updater() {
        // console.log(this.render())
        this.update(this.render());
        this.componentDidUpdate();
    }
    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }
        this.#updater()
    }

    build() {
        this.componentWillMount();
        return this.render();
    }
}

export {
    Component
}