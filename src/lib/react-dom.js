function render(element, container) {
    // container.innerHTML = element.render();

    if (typeof element === 'string' || element instanceof Element) {
        return container.append(element);
    }

    function reRender(newChild) {
        container.replaceChild(newChild, childElement);
        childElement = newChild;
        console.log(newChild);
    }

    element.update = reRender
    let childElement = element.build();

    // El Element.append() método inserta un conjunto de Node objetos 
    // u objetos de cadena después del último hijo del Element
    container.append(childElement);

    element.componentDidMount();
}

export {
    render
}