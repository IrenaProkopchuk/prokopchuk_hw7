import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ComponentB from '../ComponentB/ComponentB';
import reducer from '../../redux/reducer';

const store = createStore(reducer);

class ComponentA extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ComponentB />
        </div>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapStateToProps)(ComponentA);