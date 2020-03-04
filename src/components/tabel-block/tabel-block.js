import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ListPeople from '../list-people/list-people';

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
            <div className="col-6">  
              <ListPeople getData={this.swapiService.getAllPeople} onSelectItem={this.onPersonSelected} />     
            </div>
      
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    );  
  };
}