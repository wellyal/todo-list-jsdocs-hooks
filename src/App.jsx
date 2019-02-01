import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * @typedef {Object<string, number>} Person
 * @property {string} name The name of the person.
 * @property {number} age The age of the person.
 */
/**
 * @type {Person} person
 */
const person = {
  name: 'Joe',
  age: 32
};

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.
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

export default App;
