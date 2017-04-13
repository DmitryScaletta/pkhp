import {
  getPage,
} from '../api';

export const FETCH_PAGE_REQUEST = 'FETCH_PAGE_REQUEST';
export const FETCH_PAGE_SUCCESS = 'FETCH_PAGE_SUCCESS';
export const FETCH_PAGE_FAILURE = 'FETCH_PAGE_FAILURE';

export const fetchPage = pageName => (dispatch) => {
  dispatch({ type: FETCH_PAGE_REQUEST });

  getPage(pageName)
  .then(pageContent => dispatch({
    type: FETCH_PAGE_SUCCESS,
    pageName,
    pageContent,
  }))
  .catch(error => dispatch({
    type: FETCH_PAGE_FAILURE,
    error,
  }));
};

