import React, { useEffect, useState } from 'react';

import './SideBar.scss';

const SideBar = () => {
  const [sideBarClasses, setSideBarClasses] = useState('side-bar');
  const [isExpand, setIsExpand] = useState(false);
  const toggleSideBar = () => {
    setIsExpand(!isExpand);
  };

  useEffect(() => {
    setSideBarClasses(`side-bar ${isExpand ? 'expand' : ''}`);
  }, [isExpand]);
  return (
    <div className={sideBarClasses}>
      <button type="button" className="toggle" onClick={toggleSideBar}>
        toggle
      </button>
      <div className="side-bar-content" />
    </div>
  );
};

export default SideBar;
