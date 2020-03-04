import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="errorIndicator">
      <span>BOOM!</span><br/>
      <span>Please try again later</span><br/>
      <span>(we are already working on fixing bugs)</span>
    </div>
  );
};

export default ErrorIndicator;