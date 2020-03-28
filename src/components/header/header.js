import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends Component {
  onDelActiveItem = () => {    
    const items = document.querySelectorAll('.navItem');
    for(let i=0; i<items.length; i++) {
      items[i].classList.remove('activeNavItem');
    }
  };
  
  render() {
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

              <div className="wrNavigation">
                <ul className="navigation">
                  <li onClick={this.onDelActiveItem} className="navItem activeNavItem">
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={this.onDelActiveItem} className="navItem">
                    <Link to="/people">People</Link>
                  </li>
                  <li onClick={this.onDelActiveItem} className="navItem">
                    <Link to="/starships">Starships</Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
}