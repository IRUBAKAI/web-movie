import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import PersonalFilmInfo from "./PersonalFilmInfo";


function Main() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((movieInfo) => {
        setFilms(movieInfo.results);
        PersonalFilmInfo(movieInfo)
      });
  }, []);

  console.log(films);

  return (
    <div className={styles.flex}>
      {films.map(({ poster_path, title, genre_ids, id}) => (
        
        <div className={styles.content}>
          <div className={styles.movieBlock}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
            />
            <div className={styles.movieInfoCss}>
              <h2>
                <Link
                  onClick={(id)=> {console.log(id)}}
                  className={styles.linkToInfoFilm}
                  to={`personalFilmInfo/${id}`}
                >
                  {title}
                </Link>
              </h2>
              <p>Genre: {genre_ids}</p>
              <button className={styles.btnAdd}>Add to Favourite</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
