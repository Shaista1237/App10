import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [charFrequency, setCharFrequency] = useState({});

  const countCharFrequency = (str) => {
    const frequency = {};
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  };

  const handleCount = () => {
    const frequency = countCharFrequency(inputString);
    setCharFrequency(frequency);
  };

  return (
    <div className="App">
      <h1>Character Frequency Counter</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={handleCount}>Count Frequency</button>
      <div>
        <h3>Character Frequencies:</h3>
        {Object.entries(charFrequency).map(([char, freq], index) => (
          <p key={index}>
            '{char}' : {freq}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
