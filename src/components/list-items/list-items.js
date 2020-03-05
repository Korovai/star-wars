import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './list-items.css';

export default class ListPeople extends Component {
  
  state = {
    items: null,
    errorIndicator: false
  }
  
  componentDidMount() {
    const {getData} = this.props;
    
    getData().then((items) => {
      this.setState({
        items
      });
    }).catch(this.errorIndicator);
  };
  
  errorIndicator = () => {
    this.setState({
      errorIndicator: true
    });
  };
  
  renderItems = (arr) => {
    const {onSelectItem} = this.props;
    
    return arr.map((item) => {
      const {id, name} = item;
      
      return (
        <li key={id} className="list-group-item d-flex">
          <span onClick={() => onSelectItem(id)} className="labelList">{name}</span>
        </li>
      );
    });
  };
  
  render() {
    const {items, errorIndicator} = this.state;
    
    if(!items) {
      return <Spinner />
    }

    const listItems = errorIndicator ? <ErrorIndicator /> : this.renderItems(items);
    
    return (
      <div className="jumbotron">
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );  
  };
}