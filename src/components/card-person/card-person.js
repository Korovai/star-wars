import React, {Component} from 'react';
import Spinner from '../spinner/spinner';

import './card-person.css';

export default class CardPerson extends Component {
  
  state = {
    person: null
  };
  
  componentDidMount() {
    this.updateCard();
  };
  
  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updateCard();
    }
  };
  
  updateCard() {
    const {getData, itemId} = this.props;
    
    getData(itemId).then((person) => {
      this.setState({
        person
      });
    });
  };
  
  render() {
    const {person} = this.state;

    if(!person) {
      return <Spinner />
    }
    
    const {name, gender, birthYear, eyeColor, urlPic} = person;
      
    return (
      <div className="jumbotron d-flex">
        <div className="imgDetailsCard">
          <img src={urlPic} alt="Person" />
        </div>

        <div className="infoDetailsCard">
          <h3>{name}</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex">
              <span>Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>            
        </div>
      </div>
    );
  };
}