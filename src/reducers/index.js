import { combineReducers } from 'redux';
import common from './common';
import catalog from './catalog';
import news from './news';
import page from './page';
import gallery from './gallery';
import awards from './awards';

const rootReducer = combineReducers({
  common,
  catalog,
  news,
  page,
  gallery,
  awards,
});

export default rootReducer;
