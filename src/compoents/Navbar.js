import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon from "./Icons";
import React from "react";

function Navbar(props) {
  const {setSearch} = props

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <Link className={styles.favourite_link} to="/favouriteAdd">
            Favourite {Icon}
          </Link>
          <a className={styles.popular} href="/"><h1>Popular Movies</h1></a>
          <input
            className={styles.search}
            type="text"
            placeholder="Movie name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
