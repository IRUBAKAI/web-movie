import React from "react";
import Navbar from './compoents/Navbar';
import FavouriteAdd from './compoents/FavouriteAdd';
import PersonalFilmInfo from "./compoents/PersonalFilmInfo";
import Main from './compoents/Main';
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return(
    <>
    <Router>
      <Route exact path="/favouriteadd"><FavouriteAdd/></Route>
      <Route exact path="/personalfilminfo:/id"><PersonalFilmInfo/></Route>
      <Route exact path="/">
        <Navbar/>
        <Main/>
      </Route>
    </Router>
    </>
  )
}

export default App
