import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  
  state = {
    planet: {}
  };
  
  swapiService = new SwapiService();
  
  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 5000);
  };
  
  updatePlanet = () => {
    const id = (Math.floor(Math.random()*20))+2;
    
    this.swapiService
      .getPlanet(id).then((planet) => {
        this.setState({planet});
      });
  };
  
  render() {
    const {id, name, rotationPeriod, diameter, population} = this.state.planet;
    console.log(this.state);
    
    return (
      <div className="wrRandomBlock">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="jumbotron wrRandomPlanet">
                <div className="wrImgRandomPlanet">
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" />
                </div>

                <div className="wrInfoRandopPlanet">
                  <h3>{name}</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex">
                      <span>Population:</span>
                      <span>{population}</span>
                    </li>
                    <li className="list-group-item d-flex">
                      <span>Rotation Period:</span>
                      <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item d-flex">
                      <span>Diameter:</span>
                      <span>{diameter}</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div> 
      </div>
    );  
  };
};