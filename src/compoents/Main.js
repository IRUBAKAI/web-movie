import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { getFilmsFetch, getGenresFetch } from '../ActionCreator'

function Main({ favourites, setFavourites }) {
  const inputValue = useSelector((state)=> state.search.inputValue)
  const films = useSelector((state) => state.getFilms.films);
  const genres = useSelector((state) => state.getFilms.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsFetch());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getGenresFetch());
  }, [dispatch]);

  

  const filterMovies = films.filter((movie) => {
    return movie.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  

  function handleOnClickAdd(movie) {
    const newFavouriteListAdd = [...favourites, movie];
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie));
    };

    saveToLocalStorage(newFavouriteListAdd);
    setFavourites(newFavouriteListAdd);
  }

  function handleOnClickRemove(movie) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== movie.id;
    });
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <>
      <div className={styles.flex}>
        {filterMovies.map((movie) => {
          const isFavourite = Boolean(
            favourites.find((favouriteFilm) => favouriteFilm.id === movie.id)
          );
          return (
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
                  <p>
                    Genre:
                    {genres
                      .filter((genre) => movie.genre_ids.includes(genre.id))
                      .map((genre) => genre.name + " ")}
                  </p>
                  <button
                    className={styles.btnAdd}
                    onClick={
                      !isFavourite
                        ? () => handleOnClickAdd(movie)
                        : () => handleOnClickRemove(movie)
                    }
                  >
                    {!isFavourite
                      ? "Add to Favourites"
                      : "remove from Favourites"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;