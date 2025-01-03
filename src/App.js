import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import Filter from './components/Filter';
import ChosenFilter from './components/ChosenFilter';
import Quiz from './components/Quiz.js'

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your School SF</h1>
        <SearchBar />
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </header>
      <div className="content">
        <div className="main-element">
          {/* <ProgressBar /> */}
          <Quiz />
        </div>
        <div className="main-element">
          <h2>Search results</h2>
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
