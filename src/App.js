import React from "react";
import Navbar from './compoents/Navbar';
import FavouriteAdd from './compoents/FavouriteAdd';
import PersonalFilmInfo from "./compoents/PersonalFilmInfo";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return(
    <>
    
    <Router>
    <Switch>
      <Route exact path="/favouriteadd"><FavouriteAdd/></Route>
      <Route exact path="/personalfilminfo/:id"><PersonalFilmInfo/></Route>
      <Route exact path="/">
        <Navbar/>
      </Route>
      </Switch>
    </Router>
    
    </>
  )
}

export default App
