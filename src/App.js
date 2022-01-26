import './App.css';
import React from 'react';
import Banner from './components/Banner';
import banner1 from "./assets/images/banner-1.png"
import banner2 from "./assets/images/banner-2.png"
import Header from './components/Header';
import FlatList from './components/FlatList';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import axios from "axios"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import Error from './pages/Error';
import FlatPage from './pages/Flat';
import { ABOUT, ERROR, FLAT, HOME } from './Routes';


class App extends React.Component {

  constructor() {
    super();
    this.state = {flats: []};
  }

  async getData() {
    return await axios('https://raw.githubusercontent.com/iliasse-e/iliasse-e-IliasseELABOUYI_11_31122021/main/data.json');
  }

  componentDidMount() {
  
    this.getData().then(data => {
      this.setState({flats: data.data})
      console.log(this.state.flats)
    })
    .catch(err => {console.log(err)});
  
  }
  
  render() {

    return <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route exact path={HOME}> 
                <MainPage flats={this.state.flats}/>
              </Route>

              <Route path={ABOUT}> 
                <AboutPage />
              </Route>

              <Route path={FLAT}> 
                <FlatPage flats={this.state.flats}/>
              </Route>
              
              <Route path={ERROR}> 
                <Error />
              </Route>

          </Switch>
          <Footer />
        </Router>
    </div>
  };
}

export default App;
