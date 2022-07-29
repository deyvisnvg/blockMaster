const createStore = (reducer, initialState) => { //Base de Redux
    let state = initialState

    let updater = () => { };
    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        console.log("🚀 ~ file: index.js ~ line 9 ~ dispatch ~ state", state)
        updater();
    };
    const subscribe = (listener) => {
        updater = listener;
        // window.resultPend.textContent = `Total de calorías a quemar: 1360563`;
    };

    return {
        getState,
        dispatch,
        subscribe,
    };
}

function combineReducers() {
    
}

export {
    createStore,
    combineReducers
}