import React, { Component } from 'react';
import Router from './Router';
import Header from './header/Header';

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Router />
        </div>
    );
  }
}