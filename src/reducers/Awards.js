import {
  FETCH_AWARDS_SUCCESS,
} from '../actions/Awards';
import initialItate from '../store/store';

export default (state = initialItate.awards, action) => {
  switch (action.type) {
    case FETCH_AWARDS_SUCCESS:
      return {
        ...state,
        diplomas: action.diplomas,
        certificates: action.certificates,
      };

    default:
      return state;
  }
};
