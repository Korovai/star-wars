import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ListPeople from '../list-people/list-people';
import CardPerson from '../card-person/card-person';

import './tabel-block.css';

export default class TabelBlock extends Component {
  
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
      <div className="wrTabelBlock">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">  
              <ListPeople getData={this.swapiService.getAllPeople} onSelectItem={this.onPersonSelected} />     
            </div>
      
            <div className="col-6 text-center">
              <CardPerson getData={this.swapiService.getPerson} itemId={this.state.selectPerson} />
            </div>
          </div>
        </div>
      </div>
    );  
  };
}