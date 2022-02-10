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
<<<<<<< HEAD
          <Route exact path="/favouritelist">
=======
          {<Route exact path="/favouritelist">
>>>>>>> 6efddfcbcbaffbb1a69b7bbf6708553d2e688807
            <FavouriteList
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </Route>
          <Route exact path="/personalfilminfo/:id">
            <PersonalFilmInfo />
<<<<<<< HEAD
          </Route>
=======
          </Route>}
>>>>>>> 6efddfcbcbaffbb1a69b7bbf6708553d2e688807
          <Route exact path="/web-movie">
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
