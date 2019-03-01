import React, { Component } from 'react';
<<<<<<< HEAD
import Navbar from "./components/Navbar"

=======
import { Route } from 'react-router-dom'
import HomePage from './routes/home'
>>>>>>> 972a446636c978fbcfdce6db9ed66ddb466300b5


class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div >
        <Navbar />
        Hello World
=======
      <div>
        <Route exact path="/" component={HomePage} />

>>>>>>> 972a446636c978fbcfdce6db9ed66ddb466300b5
      </div>
    );
  }
}

export default App;
