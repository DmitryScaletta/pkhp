import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import * as actions from '../actions/Gallery';

class Galley extends React.Component {
  componentWillMount() {
    const { images, fetchGalleryImages } = this.props;
    if (images.length === 0) fetchGalleryImages();
  }

  render() {
    const { images, error, fetching } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="gallery">
        <div className="gallery__inner">
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }
}

Galley.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchGalleryImages: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  images: state.gallery.images,
  fetching: state.common.fetching,
  error: state.common.error,
});

export default connect(mapStateToProps, actions)(Galley);
