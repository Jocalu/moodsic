import { combineReducers } from 'redux';
import listReducer from './listReducer';
import detailReducer from './detailReducer';
import likedSongsReducer from './likedSongsReducer';

const rootReducer = combineReducers({
  listReducer,
  detailReducer,
  likedSongsReducer
});

export default rootReducer;
