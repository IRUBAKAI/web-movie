import React from "react";
import Navbar from './compoents/Navbar';
import FavouriteAdd from './compoents/FavouriteAdd';
import Main from './compoents/Main';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return(
    <>
    <Router>
      <Route exact path="/favouriteAdd" component={FavouriteAdd}/>
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Main}/>
    </Router>
    </>
  )
}

export default App
