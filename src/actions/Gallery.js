import {
  getGalleryImages,
} from '../api';

export const FETCH_GALLERY_IMAGES_REQUEST = 'FETCH_GALLERY_IMAGES_REQUEST';
export const FETCH_GALLERY_IMAGES_SUCCESS = 'FETCH_GALLERY_IMAGES_SUCCESS';
export const FETCH_GALLERY_IMAGES_FAILURE = 'FETCH_GALLERY_IMAGES_FAILURE';

export const fetchGalleryImages = () => (dispatch) => {
  dispatch({ type: FETCH_GALLERY_IMAGES_REQUEST });

  getGalleryImages()
  .then(images => dispatch({
    type: FETCH_GALLERY_IMAGES_SUCCESS,
    images,
  }))
  .catch(error => dispatch({
    type: FETCH_GALLERY_IMAGES_FAILURE,
    error,
  }));
};
