import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FavouriteList from "./components/FavouriteList";
import PersonalFilmInfo from "./components/PersonalFilmInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/favouritelist">
            <FavouriteList
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
