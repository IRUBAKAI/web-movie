import { createStore } from "redux";

function reducer( state = { inputValue: "" }, action ) {
    switch(action.type) {
        case 'inputSearch': {
            return {...state, inputValue: action.payload};
        }
        default: {
            return state
        }
    }
}

const store = createStore(reducer);

export default store;
