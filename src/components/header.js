import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from './wrapper.js'
import OptionHeader from './optionHeader.js'
import HeaderDiv from './headerDiv.js';
import Actions from "./actions.js";
import Search from "./search.js";
import store from "../store.js";
import { SET_FILTER } from '../actions/index.js'
{/* <header class="header">
    <div class="wrapper">
        <img src="./images/logo.png" alt="">
        <div>
            <ul>
                <li>All</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    </div>
</header> */}

// margin-bottom: 2em;
const HeaderStyled = styled.header`
    background: #000f38f0;
    padding: 20px 0 25px;
    position: fixed;
    z-index: 1;
    width: 100vw;
`
// top: 20px;
const Headerlogo = styled.img`
    width: 115px;
    position: relative;
    filter: drop-shadow(3px 3px 0 #f2a30c);
`

class Header extends Component {
    handleClick = function (event) {
        // console.log("🚀 ~ file: header.js ~ line 39 ~ Header ~ event", event.target.id)
        // console.log("🚀 ~ file: header.js ~ line 39 ~ Header ~ this", this.id)
        // event.target.value
        store.dispatch({
            type: SET_FILTER,
            payload: this.id
        })
    }
    render() {
        // const data = 'data-title';
        return HeaderStyled({
            children: HeaderDiv({
                class: 'headerDiv',
                children: [
                    Headerlogo({ src: './images/logo.png' }),
                    createElement('div', {
                        children: OptionHeader({
                            class: 'optionUl',
                            children: [
                                createElement('li', { id: "all", onClick: this.handleClick }, 'All'),
                                createElement('li', { id: "mostValued", onClick: this.handleClick }, 'Most Valued'),
                                createElement('li', { id: "leastValued", onClick: this.handleClick }, 'Least Valued'),
                            ]
                        })
                    }),
                    new Actions({
                        children: new Search()
                    })
                ]
            })
        })
    }
}

export default Header;