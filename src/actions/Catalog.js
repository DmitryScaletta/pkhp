import {
  getCatalog,
  getPage,
} from '../api';

export const FETCH_CATALOG_REQUEST = 'FETCH_CATALOG_REQUEST';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';

export const CATALOG_CHANGE_CATEGORY = 'CATALOG_CHANGE_CATEGORY';

export const fetchCatalog = () => (dispatch) => {
  dispatch({ type: FETCH_CATALOG_REQUEST });

  Promise.all([
    getCatalog(),
    getPage('catalog'),
  ])
  .then(([catalog, pageCatalog]) => dispatch({
    type: FETCH_CATALOG_SUCCESS,
    catalog,
    pageCatalog,
  }))
  .catch(error => dispatch({
    type: FETCH_CATALOG_FAILURE,
    error,
  }));
};

export const changeCategory = newCategoryId => ({
  type: CATALOG_CHANGE_CATEGORY,
  newCategoryId,
});
