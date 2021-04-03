// packages
import React from 'react';

import { BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom"

// Pages
import HomePage from './views/home';
import Gallery from "./views/gallery";
import NoMatchPage from "./views/noMatchPage";

// parts 
import Header from "./containers/Header";
import Footer from "./containers/Footer";

// styles
import "./assets/baseStyles/resetDefault.scss";
import "./assets/baseStyles/baseStyles.scss";


function App() {
  return (
    <>
    <Router>
    <Header />
      <Switch>
      <Route path="/gallery">
       <Gallery />
      </Route>
      <Route path="/artists">
        <h1>oi</h1>
      </Route>
      <Route path="/login">
        <h1>oi</h1>
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
          <NoMatchPage />
      </Route>
    </Switch>
    <Footer />
   </Router>
  </>
  );
}

export default App;
