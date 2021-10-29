import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { UPDATE_FILMS, UPDATE_GENRES } from "./action";

function reducer(state = { inputValue: "" }, action) {
  switch (action.type) {
    case "inputSearch": {
      return { ...state, inputValue: action.payload };
    }
    default: {
      return state;
    }
  }
}

function getFilms(state = { films: [], genres: [], filterMovies: [] }, action) {
  switch (action.type) {
    case UPDATE_FILMS: {
      return { ...state, films: action.payload };
    }
    case UPDATE_GENRES: {
      return { ...state, genres: action.payload };
    }
    default:
      return state;
  }
}



const store = createStore(
  combineReducers({ search: reducer, getFilms: getFilms }),
  applyMiddleware(thunk),
);

export default store;
