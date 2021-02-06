import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import './home.scss';
import context from './home.md';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  fetch(context)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      setMarkdownContent(text);
    });

  return (
    <div className="home-page">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default HomePage;
