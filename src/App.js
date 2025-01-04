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
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = (updatedKeyword = keyword) => {
    console.log('Searching with:', { updatedKeyword });
  
    // Mock result data
    const mockData = [
      { id: 1, name: 'HF0', location: '1000 Fulton', score: 9.6 },
      { id: 2, name: 'KSCO', location: '3410 19th St', score: 8.6 },
    ];

    // Filter the mock data based on the keyword
    const filteredResults = mockData.filter(item =>
      item.name.toLowerCase().includes(updatedKeyword.toLowerCase())
    );
  
    // Update the results state with the filtered data
    setTimeout(() => {
      console.log('Filtered search results:', filteredResults);
      setResults(filteredResults);
    }, 500); // Small delay to mimic async behavior
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your School SF</h1>
        <SearchBar keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch}/>
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </header>
      <div className="content">
        <div className="main-element">
          {/* <ProgressBar /> */}
          <Quiz answers={answers} setAnswers={setAnswers}/>
        </div>
        <div>Answers: {answers.map((answer) => (<p>{answer},</p>))}</div>
        <div className="main-element">
          <h2>Search results</h2>
          {results.map((result, index) => (
            <Result key={index} name={result.name} location={result.location} score={result.score}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
