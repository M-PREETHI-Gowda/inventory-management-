import {combineReducers} from 'redux';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    default:
      return state;
  }
};

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
