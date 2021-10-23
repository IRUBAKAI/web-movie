import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main(props) {
  const { favourites, setFavourites } = props;
  const { films, setFilms } = props;
  const { search } = props;
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movieInfo) => {
        setFilms(movieInfo.results);
      });
  }, [setFilms]);

  const filterMovies = films.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US"
    )
      .then((response) => response.json())
      .then((genresInfo) => {
        setGenres(genresInfo.genres);
      });
  }, [setGenres]);


  function HandleOnClickAdd(movie) {
    const newFavouriteListAdd = [...favourites, movie];
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie));
    };

    saveToLocalStorage(newFavouriteListAdd);
    setFavourites(newFavouriteListAdd);
  }

  function HandleOnClickRemove(movie) {
    const newFavouriteList = favourites.filter(
      (favourite) => {
        return favourite.id !== movie.id;
      }
    );
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie)
      );
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }


  return (
    <>
      <div className={styles.flex}>
        {filterMovies.map((movie) => {
          const isFavourite = Boolean(
            favourites.find((favouriteFilm) => favouriteFilm.id === movie.id),
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
                  <p>Genre: {genres.filter((genre=> movie.genre_ids.includes(genre.id))).map((genre)=> genre.name + " " )}</p>
                  {!isFavourite ? (<button className={styles.btnAdd} onClick={()=> HandleOnClickAdd(movie)}>Add to Favourites</button>) : <button className={styles.btnAdd} onClick={()=> HandleOnClickRemove(movie)}>Remove from Favourites</button>}
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
