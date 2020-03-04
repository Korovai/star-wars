import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  
  state = {
    planet: {},
    loading: true,
    errorIndicator: false
  };
  
  swapiService = new SwapiService();
  
  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 5000);
  };
  
  errorIndicator = () => {
    this.setState({
      loading: false,
      errorIndicator: true
    });
  }
  
  updatePlanet = () => {
    const id = (Math.floor(Math.random()*20))+2;
    
    this.swapiService
      .getPlanet(id).then((planet) => {
        this.setState({planet, loading: false});
      }).catch(this.errorIndicator);
  };
  
  render() {
    const {planet, loading, errorIndicator} = this.state;
    
    const spinner = loading ? <Spinner /> : null;
    const error = errorIndicator ? <ErrorIndicator /> : null;
    const planetView = !(loading || errorIndicator) ? <PlanetView planet={planet} /> : null;
    
    return (
      <div className="wrRandomBlock">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="jumbotron wrRandomPlanet">
                {spinner}
                {error}
                {planetView}
              </div>

            </div>
          </div>
        </div> 
      </div>
    );  
  };
};

const PlanetView = ({planet}) => {
  const {id, name, rotationPeriod, diameter, population} = planet;
    
  return (  
    <React.Fragment>
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
    </React.Fragment>
  );
};