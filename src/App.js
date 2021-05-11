import logo from './logo.svg';
import './App.css';
import './main.css';
import React, { Component } from 'react';

import { withAuthenticator } from 'aws-amplify-react';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);


/*
<Header />
      <h3 style={{ padding: "12px" }}>Thanks For Reading!</h3>
*/