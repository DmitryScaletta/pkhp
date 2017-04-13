import {
  getAwards,
} from '../api';

export const FETCH_AWARDS_REQUEST = 'FETCH_AWARDS_REQUEST';
export const FETCH_AWARDS_SUCCESS = 'FETCH_AWARDS_SUCCESS';
export const FETCH_AWARDS_FAILURE = 'FETCH_AWARDS_FAILURE';

export const CATALOG_CHANGE_CATEGORY = 'CATALOG_CHANGE_CATEGORY';

export const fetchAwards = () => (dispatch) => {
  dispatch({ type: FETCH_AWARDS_REQUEST });

  getAwards()
  .then(({ diplomas, certificates }) => dispatch({
    type: FETCH_AWARDS_SUCCESS,
    diplomas,
    certificates,
  }))
  .catch(error => dispatch({
    type: FETCH_AWARDS_FAILURE,
    error,
  }));
};

export const changeCategory = newCategoryId => ({
  type: CATALOG_CHANGE_CATEGORY,
  newCategoryId,
});
