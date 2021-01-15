import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import TypingMotionText from './components/TiypingMotionText/index';

function App() {
  const [motionKey, setMotionKey] = useState(0);
  const [typingStrings, setTypingStrings] = useState([
    'a software engineer.',
    'a web developer.',
    'a mobile app developer.',
  ]);
  const [strings, setStrings] = useState(
    `a software engineer.\na web developer.\na mobile app developer.`,
  );
  const [baseString, setBaseString] = useState('I am ');

  const updateStrings = useCallback((value) => {
    let stringList: string[] = [];
    stringList = value.split('\n').filter((str: string) => {
      return !!str;
    });
    if (stringList.length === 0) stringList = [''];
    setTypingStrings(stringList);
    setStrings(value);
  }, []);

  const updateBaseString = useCallback((value) => {
    setBaseString(value);
  }, []);

  useEffect(() => {
    setMotionKey(motionKey + 1);
  }, [typingStrings]);

  return (
    <div className="App">
      <div style={{ width: '100%', display: 'block', textAlign: 'center' }}>
        <div
          style={{
            fontSize: '18px',
            color: 'white',
            marginBottom: '5px',
            marginTop: '-150px',
          }}
        >
          Base Text
        </div>
        <input
          className="base-text-input"
          type="text"
          value={baseString}
          onChange={(e) => updateBaseString(e.target.value)}
        />
        <div style={{ fontSize: '18px', color: 'white', marginBottom: '5px' }}>
          Typing Text
        </div>
        <textarea
          className="strings-input-textarea"
          value={strings}
          onChange={(e) => updateStrings(e.target.value)}
        />
        <TypingMotionText baseText={baseString} typingStrings={typingStrings} />
      </div>
    </div>
  );
}

export default App;
