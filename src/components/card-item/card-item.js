import React, {Component} from 'react';
import Spinner from '../spinner/spinner';

import './card-item.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex">
      <span>{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class CardItem extends Component {
  
  state = {
    item: null
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
    
    getData(itemId).then((item) => {
      this.setState({
        item
      });
    });
  };
  
  render() {
    const {item} = this.state;

    if(!item) {
      return <Spinner />
    }
    
    const {name, urlPic} = item;
      
    return (
      <div className="jumbotron d-flex">
        <div className="imgDetailsCard">
          <img src={urlPic} alt="Person" />
        </div>

        <div className="infoDetailsCard">
          <h3>{name}</h3>
          <ul className="list-group">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>            
        </div>
      </div>
    );
  };
}