import React, {useState, useEffect} from 'react';
import styles from "./Main.module.css"


function Main() {
    const [films, setFilms] = useState([]);


    useEffect( () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1")
        .then(response => response.json())
        .then(movieInfo => {
            setFilms(movieInfo.results)
        } )
    }, [])
    
    console.log(films)
    
   return (
      <div className={styles.flex}>
         {films.map(film => (
             <div className={styles.content}>
                 <div className={styles.movieBlock}>
                     <img src={film.backdrop_path} alt=""/>
                     <div className="movie-info">
                        <h2>{film.title}</h2>
                        <p>Overview: {film.overview}</p>
                        <button>Add to Favourite</button>
                     </div>
                 </div>
             </div>
         ))}
    </div>
      
   )
}


export default Main