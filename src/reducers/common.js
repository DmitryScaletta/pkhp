import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
} from '../actions/Catalog';
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_ITEM_REQUEST,
  FETCH_NEWS_ITEM_SUCCESS,
  FETCH_NEWS_ITEM_FAILURE,
} from '../actions/News';
import {
  FETCH_GALLERY_IMAGES_REQUEST,
  FETCH_GALLERY_IMAGES_SUCCESS,
  FETCH_GALLERY_IMAGES_FAILURE,
} from '../actions/Gallery';
import {
  FETCH_AWARDS_REQUEST,
  FETCH_AWARDS_SUCCESS,
  FETCH_AWARDS_FAILURE,
} from '../actions/Awards';

import initialItate from '../store/store';

export default function (state = initialItate.common, action) {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST:
    case FETCH_NEWS_REQUEST:
    case FETCH_NEWS_ITEM_REQUEST:
    case FETCH_GALLERY_IMAGES_REQUEST:
    case FETCH_AWARDS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_CATALOG_SUCCESS:
    case FETCH_NEWS_SUCCESS:
    case FETCH_NEWS_ITEM_SUCCESS:
    case FETCH_GALLERY_IMAGES_SUCCESS:
    case FETCH_AWARDS_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case FETCH_CATALOG_FAILURE:
    case FETCH_NEWS_FAILURE:
    case FETCH_NEWS_ITEM_FAILURE:
    case FETCH_GALLERY_IMAGES_FAILURE:
    case FETCH_AWARDS_FAILURE:
      return {
        state,
        fetching: false,
        error: action.error,
      };

    default:
      return state;
  }
}
