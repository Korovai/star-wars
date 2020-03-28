import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ListItems from '../list-items/list-items';
import CardItem, {Record} from '../card-item/card-item';

export default class StarshipsPage extends Component {
  
  state = {
    selectStarship: 15
  };
  
  swapiService = new SwapiService();
  
  onStarshipSelected = (id) => {
    this.setState({
      selectStarship: id
    });
  };
  
  render() {
    return (
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
    );  
  };
}