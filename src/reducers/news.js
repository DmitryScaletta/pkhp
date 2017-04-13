import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ITEM_SUCCESS,
} from '../actions/News';
import initialItate from '../store/store';

export default (state = initialItate.news, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        items: action.news,
      };

    case FETCH_NEWS_ITEM_SUCCESS:
      return {
        ...state,
        current: action.newsItem,
      };

    default:
      return state;
  }
};
