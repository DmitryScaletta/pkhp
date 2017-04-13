import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Awards';

class Awards extends React.Component {
  componentWillMount() {
    const { diplomas, fetchAwards } = this.props;
    if (diplomas.length === 0) fetchAwards();
  }

  render() {
    const { diplomas, certificates, error, fetching } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="awards">
        <div className="awards__diplomas">
          <h2 className="awards__title">Дипломы</h2>
          { diplomas.map((diploma, index) => (
            <div className="awards__item" key={index}>
              <div className="awards__image">
                <a target="_blank" rel="noopener noreferrer" href={diploma.image}>
                  <img src={diploma.image} alt={diploma.name} />
                </a>
              </div>
              <div className="awards__name">{diploma.name}</div>
            </div>
          )) }
        </div>
        <div className="awards__certificates">
          <h2 className="awards__title">Сертификаты</h2>
          <div className="awards__list">
            { certificates.map((certificate, index) => (
              <div className="awards__list-item" key={index}>
                <a target="_blank" rel="noopener noreferrer" href={certificate}>
                  <img src={certificate} alt="" />
                </a>
              </div>
            )) }
          </div>
        </div>
      </div>
    );
  }
}

Awards.propTypes = {
  diplomas: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
  certificates: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchAwards: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  diplomas: state.awards.diplomas,
  certificates: state.awards.certificates,
  fetching: state.common.fetching,
  error: state.common.error,
});

export default connect(mapStateToProps, actions)(Awards);
