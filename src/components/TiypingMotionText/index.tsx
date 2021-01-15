import React, { useEffect, useState } from 'react';
import { string, bool, arrayOf } from 'prop-types';

import './style.css';

const TypingMotionText = ({
  withTag,
  codeStyle,
  baseText,
  typingStrings,
}: PropTypes) => {
  const originTypingTextClasses = 'text-cursor ';
  const sentenceCount = typingStrings.length;
  const initialTypingStringId = 0;
  const initialTypingCharId = 0;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textCursorClasses, setTypingTextClasses] = useState(
    originTypingTextClasses,
  );
  const [innerTypingStrings, setInnerTypingStrings] = useState(typingStrings);
  const [typingCharId, setTypingCharId] = useState(initialTypingCharId);
  const [isReadyToSwitchString, setIsReadyToSwtichString] = useState(false);
  const [typingStringId, setTypingStringId] = useState(initialTypingStringId);

  let rootDivClasses = 'typing-motion-text ';
  if (codeStyle) rootDivClasses += 'code';
  const stringSwitchDelay = 2000;

  const clearAllTimer = () => {
    const highestTimeoutId = setTimeout(() => {});
    for (let i = 0; i < highestTimeoutId; i += 1) {
      clearTimeout(i);
    }
  };

  const resetAllState = () => {
    clearAllTimer();

    setIsLoaded(false);
    setTypingTextClasses(`${originTypingTextClasses}blink`);
    setInnerTypingStrings(typingStrings);
    setTypingCharId(initialTypingCharId);
    setIsReadyToSwtichString(false);
    setTypingStringId(initialTypingStringId);
    setIsDeleting(!isDeleting);
  };

  const getTypeDelay = () => {
    const isLongDelay = Math.floor(Math.random() * Math.floor(50)) === 1;
    const randomShortDelay =
      100 + 10 * Math.floor(Math.random() * Math.floor(3));
    const randomLongDelay = isLongDelay ? 200 : 0;
    return randomShortDelay + randomLongDelay;
  };

  const resetTypingState = () => {
    setTypingCharId(-1);
    setTypingTextClasses(originTypingTextClasses);
  };

  const deleteAllText = () => {
    setIsDeleting(true);
  };

  const switchTypingSentence = () => {
    setIsReadyToSwtichString(false);
    if (sentenceCount === 1) {
      if (innerTypingStrings[0].length === 0) {
        setTypingTextClasses(`${originTypingTextClasses}blink`);
        return;
      }
      resetTypingState();
    }

    if (typingStringId + 1 === sentenceCount) {
      setTypingStringId(0);
    } else {
      setTypingStringId(typingStringId + 1);
    }
  };

  const deleteText = () => {
    const hasTextRemain = typingCharId !== 0;

    if (hasTextRemain) {
      setTimeout(() => {
        setTypingCharId(typingCharId - 1);
      }, 50);
    } else {
      setTypingTextClasses(`${textCursorClasses}blink`);
      setTimeout(() => {
        setIsDeleting(false);
      }, stringSwitchDelay);
    }
  };

  const typeText = () => {
    const isTypeTextRemain =
      innerTypingStrings[typingStringId].length !== typingCharId;

    if (isTypeTextRemain) {
      setTimeout(() => {
        setTypingCharId(typingCharId + 1);
      }, getTypeDelay());
    } else {
      setTypingTextClasses(`${textCursorClasses}blink`);
      setTimeout(() => {
        deleteAllText();
      }, stringSwitchDelay);
    }
  };

  useEffect(() => {
    resetAllState();
  }, [typingStrings]);

  useEffect(() => {
    if (isLoaded) {
      if (isDeleting) {
        setTypingTextClasses(originTypingTextClasses);
        deleteText();
      } else if (typingCharId === 0) {
        setIsReadyToSwtichString(true);
      }
    } else {
      setIsDeleting(false);
      setIsLoaded(true);
    }
  }, [isDeleting]);

  useEffect(() => {
    if (isReadyToSwitchString) {
      switchTypingSentence();
    }
  }, [isReadyToSwitchString]);

  useEffect(() => {
    resetTypingState();
  }, [typingStringId]);

  useEffect(() => {
    if (typingCharId === -1) {
      setTypingCharId(0);
      return;
    }
    if (isDeleting) {
      deleteText();
    } else {
      typeText();
    }
  }, [typingCharId]);

  return (
    <div className={rootDivClasses}>
      {withTag ? (
        <span className="tag">
          {'<'}
          <span className="tag-name">{withTag}</span>
          {'>'}
        </span>
      ) : null}
      &ensp;
      {baseText}
      <span className="typing-text">
        {innerTypingStrings[typingStringId].slice(0, typingCharId)}
        <span className={textCursorClasses}>&ensp;</span>
      </span>{' '}
      {withTag ? (
        <span className="tag">
          {'</'}
          <span className="tag-name">{withTag}</span>
          {'>'}
        </span>
      ) : null}
    </div>
  );
};

interface PropTypes {
  withTag: string;
  codeStyle: boolean;
  baseText: string;
  typingStrings: string[];
}

TypingMotionText.propTypes = {
  withTag: string,
  codeStyle: bool,
  baseText: string,
  typingStrings: arrayOf(string),
};

TypingMotionText.defaultProps = {
  withTag: 'code',
  codeStyle: true,
  baseText: 'I am ',
  typingStrings: [
    'a software engineer.',
    'a web developer.',
    'a mobile apps developer.',
  ],
};

export default TypingMotionText;
