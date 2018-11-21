import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/header' component={Header} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
