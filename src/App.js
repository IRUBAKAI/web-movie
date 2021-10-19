import React from "react";
import { useState } from "react";
import Navbar from "./compoents/Navbar";
import Main from "./compoents/Main";
import FavouriteAdd from "./compoents/FavouriteAdd";
import PersonalFilmInfo from "./compoents/PersonalFilmInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/favouriteadd">
            <FavouriteAdd
              films={films}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </Route>
          <Route exact path="/personalfilminfo/:id">
            <PersonalFilmInfo />
          </Route>
          <Route exact path="/">
            <Navbar setSearch={setSearch} />

            <Main
              search={search}
              films={films}
              setFilms={setFilms}
              setFavourites={setFavourites}
              favourites={favourites}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
