import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main(props) {
  let inputValue = props.value;
  let getFilms = props.films;
  let getSetFilms = props.setFilms;
  let favouritesFilms = props.favourites;
  let setFavouritesFilms = props.setFavourites;

  
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movieInfo) => {
        getSetFilms(movieInfo.results);
      });
  }, [getSetFilms]);


  const filterMovies = getFilms.filter((movie) => {
    return movie.title.toLowerCase().includes(inputValue.toLowerCase())
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
              <button onClick={
                function clickDisabled(e) {
                  favouritesFilms.map((item) => {
                    if(item.id === movie.id) {
                      e.target.setAttribute.disabled = true
                      console.log(item)
                    }
                  })
                }
              }>click</button>
              <div className={styles.movieInfoCss}>
                <h2>
                  <Link
                    className={styles.linkToInfoFilm}
                    to={`/personalfilminfo/${movie.id}`}
                  >
                    {movie.title}
                  </Link>
                </h2>
                <p>HEAR WILL BE GENRES</p>
                <button
                  onClick={function HandleOnClickAdd() {
                    const newFavouriteList = [...favouritesFilms, movie];
                    const saveToLocalStorage = (movie) => {
                      localStorage.setItem(
                        "react-movie-app-favourites",
                        JSON.stringify(movie)
                      );
                    };
                    
                    saveToLocalStorage(newFavouriteList);
                    setFavouritesFilms(newFavouriteList);
                    
                  }
                }
                  className={styles.btnAdd}
                >
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
