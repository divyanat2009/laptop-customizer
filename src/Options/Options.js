import React, {Component} from 'react';
import { default as slugify } from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Options extends Component{
  render(){
    const {itemHash, feature, item, selectedOption} = this.props;
    return (
      <div key={itemHash} className="feature__item">
      <input type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(item.name)}
        checked={selectedOption}
        onChange={e => this.props.handleUpdate(feature, item)} />
      <label htmlFor={itemHash} className="feature__label">
         {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
      </div>
      );
    }
}

export default Options;