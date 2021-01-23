import React, { useEffect, useState } from 'react';

import './home.scss';
import SideInfoBar from '../../components/SideInfoBar';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="home-page">
      <SideInfoBar />
    </div>
  );
};

export default HomePage;
