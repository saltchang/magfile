import React, { useEffect, useState } from 'react';

import './home.scss';

import demoMainBanner from '../../images/demo/d-banner-2160p.jpg';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const mainTitle = '「藐視戰鬥的艱辛。」';
  const subTitle = 'Belli dura despicio';

  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div className="home-page">
      <div className="main-container">
        <div className="top-bar" />
        <div
          className="main-banner"
          style={{
            backgroundImage: `url(${demoMainBanner})`,
          }}
        >
          <div className="main-banner-overlay">
            <div className="main-banner-title">
              <div className="main-banner-title__main">{mainTitle}</div>
              <div className="main-banner-title__sub">{subTitle}</div>
            </div>
          </div>
        </div>

        {/* <div className="main-content">main-content</div> */}
      </div>
    </div>
  );
};

export default HomePage;
