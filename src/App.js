import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from './routes/home'
import KAKA from './components/navbar/navbar'


class App extends Component {
  render() {
    return (
      <div>
        <KAKA />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
