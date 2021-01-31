import React, { useEffect, useState } from 'react';

import './home.scss';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="home-page">
      <div className="main-container">
        {/* <div className="main-content">main-content</div> */}
      </div>
    </div>
  );
};

export default HomePage;
