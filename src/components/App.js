import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./header&footer/Header";
import Footer from "./header&footer/Footer";
import HomePage from "./mainPage/HomePage";

import FavoritePage from "./anotherpages/searchingPage/FavoritePage";
import Movies from "./mainPage/Movies/Movies";
import Series from "./mainPage/SeriesTV/Series";
import Search from "./mainPage/Search/Search";
import DetailsPage from "./mainPage/Detail/DetailsPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/FavoritePage/' component={FavoritePage} exact />
          <Route path='/Search/' component={Search} exact/>
          <Route path='/Movies/' component={Movies} exact />
          <Route path='/Series/' component={Series} exact/>
          <Route path='/DetailsPage/:media_type/:id' component={DetailsPage} exact/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
