import { UPDATE_FILMS, UPDATE_GENRES } from './action'

function updateFilms(payload) {
    return { type: UPDATE_FILMS, payload };
  }
  function updateGenres(payload) {
    return { type: UPDATE_GENRES, payload}
  }
  
  //action creator too
  
  export function getFilmsFetch() {
    return function (dispatch) {
      fetch("https://api.themoviedb.org/3/movie/popular/?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1")
        .then((data) => data.json())
        .then((data) => {
          dispatch(updateFilms(data.results));
        });
    };
  }
  
  export function getGenresFetch() {
    return function (dispatch) {
      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US")
        .then((data) => data.json())
        .then((data) => {
          dispatch(updateGenres(data.genres));
        });
    };
  }