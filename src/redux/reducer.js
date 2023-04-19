import { INCREMENT_NUMBER } from './actions';

const initialState = {
  number: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
}

export default reducer;