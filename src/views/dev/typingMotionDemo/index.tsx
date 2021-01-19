import React, { useEffect, useState, useCallback } from 'react';

import TypingMotion from '../../../components/TypingMotion';
import './typingMotionDemo.scss';

const TypingMotionDemoPage = () => {
  const getStringList = (str: string): string[] => {
    return str.split('\n').filter((value: string) => !!value);
  };
  const defaultStrings = `a software engineer.\na web developer.\na mobile app developer.`;
  const defaultBaseText = 'I am ';

  const [motionKey, setMotionKey] = useState(0);
  const [typingStrings, setTypingStrings] = useState(
    getStringList(defaultStrings),
  );
  const [strings, setStrings] = useState(defaultStrings);
  const [baseText, setBaseText] = useState(defaultBaseText);

  const updateStrings = useCallback((value: string) => {
    let stringList: string[] = getStringList(value);
    if (stringList.length === 0) stringList = [''];
    setTypingStrings(stringList);
    setStrings(value);
  }, []);

  const updateBaseText = useCallback((value) => {
    setBaseText(value);
  }, []);

  useEffect(() => {
    setMotionKey(motionKey + 1);
  }, [typingStrings]);

  return (
    <div className="typing-motion-demo-page">
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
          value={baseText}
          onChange={(e) => updateBaseText(e.target.value)}
        />
        <div style={{ fontSize: '18px', color: 'white', marginBottom: '5px' }}>
          Typing Text
        </div>
        <textarea
          className="strings-input-textarea"
          value={strings}
          onChange={(e) => updateStrings(e.target.value)}
        />
        <TypingMotion baseText={baseText} typingStrings={typingStrings} />
      </div>
    </div>
  );
};

export default TypingMotionDemoPage;
