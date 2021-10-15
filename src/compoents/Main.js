import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main(props) {
  let inputValue = props.value;
  let getFilms = props.films;

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movieInfo) => {
        props.setFilms(movieInfo.results);
      });
  }, [props]);
  
  
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US")
      .then((response) => response.json())
      .then((genresArray) => {
        props.setGenres(genresArray.genres);
      });
  }, []);



  const filterMovies = getFilms.filter((movie) => {
    return movie.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <>
      <div className={styles.flex}>
        {filterMovies.map((movie) => (
          <div className={styles.content}>
            <div className={styles.movieBlock}>
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
              <div className={styles.movieInfoCss}>
                <h2>
                  <Link
                    className={styles.linkToInfoFilm}
                    to={`/personalfilminfo/${movie.id}`}
                  >
                    {movie.title}
                  </Link>
                </h2>
                {props.genres.filter((genre) => {
                  movie.genre_ids.map((id)=> {
                    if(genre.id === id) {
                  <p>Genre: {genre.name}</p>
              }
            })
            })}
                <button
                  onClick={function HandleOnClickAdd() {
                    const newFavouriteList = [...props.favourites, movie];
                    const saveToLocalStorage = (movie) => {
                      localStorage.setItem(
                        "react-movie-app-favourites",
                        JSON.stringify(movie)
                      );
                    };
                    saveToLocalStorage(newFavouriteList);
                    props.setFavourites(newFavouriteList);
                  }}
                  className={styles.btnAdd}
                >
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default Main;
