import nodeReducers from './nodeReducers';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
      nodeReducers:nodeReducers
});
export default allReducers;
