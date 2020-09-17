import authReducer from './authReducer';
import catReducer from './catReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  cat: catReducer
});

export default rootReducer;

