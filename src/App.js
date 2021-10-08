import React from "react";
import Navbar from './compoents/Navbar';
import FavouriteAdd from './compoents/FavouriteAdd';
import Main from './compoents/Main';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return(
    <>
    <Router>
      <Navbar/>
      <Main/>
        <Switch>
            <Route path="/favouriteAdd"><FavouriteAdd/></Route>
        </Switch>
    </Router>
    </>
  )
}

export default App
