import React from 'react';
import { Link } from 'react-router-dom';

import './dev.scss';

const DevPage = () => {
  return (
    <div className="dev-page">
      All Components
      <Link className="link" to="/dev/demo/TypingMotion">
        TypingMotion
      </Link>
    </div>
  );
};

export default DevPage;
