import React from 'react';
import {Link} from 'react-router-dom'
import styles from "./Navbar.module.css"
import Icon from "./Icons"

function Navbar() {
   return (
       <>

       <nav className={styles.navbar}>
           <div className={styles.content}>
                <Link className={styles.favourite_link} to="/favouriteAdd">Favourite {Icon}</Link>
                <h1 className={styles.popular}>Popular Movies</h1>
                <input className={styles.search} type="text" placeholder="Movie name"/>
            </div>
       </nav>   

       </>
   )
}


export default Navbar