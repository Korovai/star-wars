import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ListItems from '../list-items/list-items';
import CardItem, {Record} from '../card-item/card-item';

import './tabel-block.css';

export default class TabelBlock extends Component {
  
  state = {
    selectPerson: 1,
    selectStarship: 15
  };
  
  swapiService = new SwapiService();
  
  onPersonSelected = (id) => {
    this.setState({
      selectPerson: id
    });
  };
  
  onStarshipSelected = (id) => {
    this.setState({
      selectStarship: id
    });
  };
  
  render() {
    return (
      <div className="wrTabelBlock">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">  
              <ListItems getData={this.swapiService.getAllPeople} onSelectItem={this.onPersonSelected} />     
            </div>
      
            <div className="col-6 text-center">
              <CardItem getData={this.swapiService.getPerson} itemId={this.state.selectPerson}>
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="BirthYear" />
                <Record field="eyeColor" label="EyeColor" />
              </CardItem>
            </div>
          </div>
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">  
              <ListItems getData={this.swapiService.getAllStarShips} onSelectItem={this.onStarshipSelected} />     
            </div>
      
            <div className="col-6 text-center">
              <CardItem getData={this.swapiService.getStarship} itemId={this.state.selectStarship}>
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="length" label="Length" />
              </CardItem>
            </div>
          </div>
        </div>
      </div>
    );  
  };
}