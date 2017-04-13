import {
  FETCH_GALLERY_IMAGES_SUCCESS,
} from '../actions/Gallery';
import initialItate from '../store/store';

export default (state = initialItate.gallery, action) => {
  switch (action.type) {
    case FETCH_GALLERY_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.images,
      };

    default:
      return state;
  }
};
