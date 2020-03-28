import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ListItems from '../list-items/list-items';
import CardItem, {Record} from '../card-item/card-item';

export default class PeoplePage extends Component {
  
  state = {
    selectPerson: 1
  };
  
  swapiService = new SwapiService();
  
  onPersonSelected = (id) => {
    this.setState({
      selectPerson: id
    });
  };
  
  render() {
    return (
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
    );  
  };
}