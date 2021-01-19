import React, { useEffect, useState } from 'react';

import './home.scss';
import SideBar from '../../components/SideBar';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="home-page">
      <SideBar />
    </div>
  );
};

export default HomePage;
