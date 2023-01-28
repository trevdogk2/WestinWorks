import React, { useState, useEffect } from 'react';
import './App.css';
import rollover from './sounds/UI_menu_rollover.mp3';

function App() {
  const [audio] = useState(new Audio(rollover));
  const [displayName, setDisplayName] = useState('TREVOR WESTIN');
  const [displayName2, setDisplayName2] = useState('WORK IN PROGRESS');

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const name = 'TREVOR WESTIN';
  const name2 = 'WORK IN PROGRESS';

  function decodeText(text, setText) {
    let iterations = 0;
    const tempTextArr = text.split('');
    const interval = setInterval(() => {
      const tempText = tempTextArr.map((letter, index) => {
        if (index < iterations) {
          return text[index];
        }
        if (index - (text.length * 2) / 3 > iterations) {
          return ' ';
        }
        return letters[Math.floor(Math.random() * 26)];
      });
      setText(tempText.join(''));
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 25);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="Info"
          onMouseEnter={() => {
            decodeText(name, setDisplayName);
            audio.currentTime = 0;
            audio.play();
          }}
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={() => {}}
        >
          {displayName}
        </div>
        <div
          className="Info"
          onMouseEnter={() => {
            decodeText(name2, setDisplayName2);
            audio.currentTime = 0;
            audio.play();
          }}
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={() => {}}
        >
          {displayName2}
        </div>
      </header>
    </div>
  );
}

export default App;
