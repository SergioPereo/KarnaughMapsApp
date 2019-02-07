import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="primary-component">
          <div className="container">
            <div className="component">
              <h1 className="title is-1">
                Input how many variables your truth table going to have
              </h1>
            </div>
            <div className="component">
              <input className="input is-primary" placeholder="1, 2, 3..." type="text"/>
            </div>
            <div className="component">
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
