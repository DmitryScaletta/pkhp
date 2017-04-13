import {
  FETCH_CATALOG_SUCCESS,
  CATALOG_CHANGE_CATEGORY,
} from '../actions/Catalog';
import initialItate from '../store/store';

export default (state = initialItate.catalog, action) => {
  switch (action.type) {
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        products: action.catalog.products,
        categories: action.catalog.categories,
      };

    case CATALOG_CHANGE_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.newCategoryId,
      };

    default:
      return state;
  }
};
