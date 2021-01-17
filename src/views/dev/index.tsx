import React from 'react';
import { Link } from 'react-router-dom';

import './dev.scss';

const DevPage = () => {
  return (
    <div className="dev-page">
      DevPage
      <div>
        <Link to="/dev/demo/typingMotionText">TypingMotionText</Link>
      </div>
    </div>
  );
};

export default DevPage;
