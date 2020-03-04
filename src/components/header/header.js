import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
    
            <h1>
              <a href="#/" className="logo">
                <span>Star</span><br/>
                <span>Wars</span>
              </a>
            </h1>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;