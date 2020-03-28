import React from 'react';
import {Link} from 'react-router-dom';

import './page-not-found.css';
import pageNotFound from './404.png';

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <div className="pageNotFound">
            <img src={pageNotFound} alt="404" />
            <span className="titlePNF">Page Not Found</span>
            <span className="textPNF">You seem to have clicked on a broken link or entered a URL that doesn't exist on this this site</span>
            <button className="btnGoGome">
              <Link to="/">Go back to site</Link>
            </button> 
          </div>      

        </div>
      </div>
    </div>
  );
};

export default PageNotFound;