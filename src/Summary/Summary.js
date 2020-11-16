import React, {Component} from 'react';
import CartItems from '../CartItems/CartItems';
import Total from '../Total/Total';


class Summary extends Component{
  render(){
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return(
          <CartItems 
           key={featureHash}
           selectedOption={feature}
           details={this.props.selected[`${feature}`]}/>
           );
    });

    return(
      <>
      {summary}
      <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
      <Total selected={this.props.selected}/>
      </div>
      </div>
      </>
    );
  }
}
export default Summary;
