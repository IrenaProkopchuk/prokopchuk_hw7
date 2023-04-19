
import React from 'react';
import { connect } from 'react-redux';
import { incrementNumber } from '../../redux/actions';

class ComponentB extends React.Component {
  handleButtonClick = () => {
    this.props.dispatch(incrementNumber());
  };

  render() {
    return (
      <div>
        <h4>Redux:</h4>
        <button onClick={this.handleButtonClick}>+</button>
        <br />
        <span>{this.props.number}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapStateToProps)(ComponentB);