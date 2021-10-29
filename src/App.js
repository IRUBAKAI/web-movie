import React from 'react';
import { useState } from 'react';
import Navbar from './compoents/Navbar';
import Main from './compoents/Main';
import FavouriteList from './compoents/FavouriteList';
import PersonalFilmInfo from './compoents/PersonalFilmInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/favouriteList">
            <FavouriteList
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </Route>
          <Route exact path="/personalfilminfo/:id">
            <PersonalFilmInfo />
          </Route>
          <Route exact path="/">
            <Navbar/>

            <Main
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
