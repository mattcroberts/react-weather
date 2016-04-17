import { combineReducers } from 'redux';
import appState from './forecast';

const rootReducer = combineReducers({
  appState
});

export default rootReducer;
