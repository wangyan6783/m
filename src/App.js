import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/style.min.css';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
        <ServicePage />
      </div>
    );
  }
}

export default App;


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
