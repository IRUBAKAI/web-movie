import React, { useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function FavouriteAdd(props) {
  const {favourites, setFavourites} = props


  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourites(movieFavourites);
  }, [setFavourites]);

  function HandleOnClickAdd(film) {
    const newFavouriteList = favourites.filter(
      (favourite) => {
        return favourite.id !== film.id;
      }
    );
    const saveToLocalStorage = (movie) => {
      localStorage.setItem(
        "react-movie-app-favourites",
        JSON.stringify(movie)
      );
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <>
      <Navbar />
      <div className={styles.flex}>
        {favourites.map((film) => {
          return (
            <div className={styles.content}>
              <div className={styles.movieBlock}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                  alt=""
                />
                <div className={styles.movieInfoCss}>
                  <h2>
                    <Link
                      className={styles.linkToInfoFilm}
                      to={`/personalfilminfo/${film.id}`}
                    ></Link>
                    {film.title}
                  </h2>
                  <p>Genre: {film.genre_ids}</p>
                  <button
                    onClick={() => HandleOnClickAdd(film)}
                    className={styles.btnAdd}
                  >
                    Remove from favourites
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

export default FavouriteAdd;
