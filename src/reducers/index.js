import { combineReducers } from 'redux';
import common from './common';
import catalog from './Catalog';
import news from './News';
import page from './Page';
import gallery from './Gallery';
import awards from './Awards';

const rootReducer = combineReducers({
  common,
  catalog,
  news,
  page,
  gallery,
  awards,
});

export default rootReducer;
