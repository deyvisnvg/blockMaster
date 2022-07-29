import { createElement } from './react/index.js';

function buildStyles(strings, dynamicValues, props) {
    let style = strings.slice();
    dynamicValues.forEach((value, index) => {
        style[index] += value(props)
    })
    // console.log('style', style)
    // console.log('dynamicValues', dynamicValues)
    return style.join('');
}

function pintarTag(strings, tag, dynamicValues, props, content) {
    const style = buildStyles(strings, dynamicValues, props)

    return createElement(tag, { ...props, style }, content)
    // if (tag == 'img')
    // // return `<${tag} style = "${styles}" src="${content}" />`;

    // return `
    //     <${tag} style = "${styles}">
    //         ${content}
    //     </${tag}>
    // `;
}

function generarContentStyled(tags) {
    const styled = {};

    tags.forEach((tag) => {
        styled[tag] = (strings, ...dynamicValues) => {
            return (props, component) => pintarTag(strings, tag, dynamicValues, props, component);
        }
    })
    return styled;
}

const tags = ['h1', 'h2', 'div', 'img', 'p', 'header', 'form', 'input', 'button', 'select', 'section', 'article', 'ul'];

const styled = generarContentStyled(tags);

export default styled;