import {
  getNews,
  getNewsById,
} from '../api';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_ITEM_REQUEST = 'FETCH_NEWS_ITEM_REQUEST';
export const FETCH_NEWS_ITEM_SUCCESS = 'FETCH_NEWS_ITEM_SUCCESS';
export const FETCH_NEWS_ITEM_FAILURE = 'FETCH_NEWS_ITEM_FAILURE';

export const fetchNews = () => (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });

  getNews()
  .then(news => dispatch({
    type: FETCH_NEWS_SUCCESS,
    news,
  }))
  .catch(error => dispatch({
    type: FETCH_NEWS_FAILURE,
    error,
  }));
};

export const fetchNewsById = id => (dispatch) => {
  dispatch({ type: FETCH_NEWS_ITEM_REQUEST });

  getNewsById(id)
    .then(newsItem => dispatch({
      type: FETCH_NEWS_ITEM_SUCCESS,
      newsItem,
    }))
    .catch(error => dispatch({
      type: FETCH_NEWS_ITEM_FAILURE,
      error,
    }));
};
