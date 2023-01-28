import React, { useState, useEffect } from 'react';
import './App.css';
import rollover from './sounds/UI_menu_rollover.mp3';

function App() {
  const [audio] = useState(new Audio(rollover));
  const [displayName, setDisplayName] = useState('TREVOR WESTIN');
  const [displayName2, setDisplayName2] = useState('TREVOR WESTIN');

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const name = 'TREVOR WESTIN';
  const name2 = 'TREVOR WESTIN';

  function decodeText(text, setText) {
    let iterations = 0;
    const interval = setInterval(() => {
      const tempText = text
        .split('')
        .map((letter, index) => {
          if (index < iterations) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      setText(tempText);
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
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
        {/* <div
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
        </div> */}
      </header>
    </div>
  );
}

export default App;
