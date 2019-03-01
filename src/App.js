import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import HomePage from './routes/home'
import ResultPage from './routes/result'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/result" component={ResultPage} />

        <Footer/>
      </div>
    );
  }
}

export default App;
