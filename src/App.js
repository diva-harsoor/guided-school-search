import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import Filter from './components/Filter';
import ChosenFilter from './components/ChosenFilter';
import Quiz from './components/Quiz.js'

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);

  const questions = [
    {
      type: 'multiple-choice',
      question: 'What grade level is your student?',
      options: ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    {
      type: 'address-input',
      question: 'Where do you live?'
    },
    {
      type: 'multiple-choice',
      question: 'Are you interested in charter schools?',
      options: ['Yes', 'No']
    },
    {
      type: 'multiple-choice',
      question: 'Are you interested in special admissions schools?',
      options: ['Yes', 'No'],
    },
    {
      type: 'slider',
      question: 'Rate the importance of the following:',
      sliders: [
        { label: 'Growth in performance' },
        { label: 'Absolute performance' },
        { label: 'Climate' },
        { label: 'Racial diversity' },
        { label: 'Socioeconomic diversity' },
        { label: 'College readiness' },
        { label: 'Closeness to home ' }
      ]
    }
  ]

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

  const renderAnswer = (question, questionIndex) => {
    const answer = answers[questionIndex];
    
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div key={questionIndex}>
            <h4>{question.question}</h4>
            <p>Selected: {answer || 'Not answered'}</p>
          </div>
        );
      
      case 'address-input':
        return (
          <div key={questionIndex}>
            <h4>{question.question}</h4>
            <p>Address: {answer || 'Not provided'}</p>
          </div>
        );
      
      case 'slider':
        return (
          <div key={questionIndex}>
            <h4>{question.question}</h4>
            {question.sliders.map((slider, sliderIndex) => (
              <p key={sliderIndex}>
                {slider.label}: {answer?.[sliderIndex] || 1} of 10
              </p>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your School SF</h1>
        <SearchBar keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch} />
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </header>
      <div className="content">
        <div className="main-element">
          {/* <ProgressBar /> */}
          <Quiz questions={questions} answers={answers} setAnswers={setAnswers} />
        </div>
        <div className="answers-summary">
          <h3>Your Answers:</h3>
          {questions.map((question, index) => renderAnswer(question, index))}
        </div>
        <div className="main-element">
          <h2>Search results</h2>
          {results.map((result, index) => (
            <Result key={index} name={result.name} location={result.location} score={result.score} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
