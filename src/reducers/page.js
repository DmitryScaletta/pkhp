import {
  FETCH_PAGE_SUCCESS,
} from '../actions/Page';
import initialItate from '../store/store';

export default function (state = initialItate.page, action) {
  switch (action.type) {
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        [action.pageName]: action.pageContent,
      };

    default:
      return state;
  }
}
