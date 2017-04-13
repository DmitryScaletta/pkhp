import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../actions/News';

class NewsList extends React.Component {
  componentWillMount() {
    if (this.props.news.length === 0) this.props.fetchNews();
  }

  render() {
    const { news, fetching, error, match } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="news">
        <h2>Новости</h2>
        {
          news.map((item, index) => <div className="news__item" key={index}>
            <span className="news__title">{item.title}</span>
            <span className="news__date">{item.date}</span>
            <Link className="news__link" to={`${match.url}/${item.id}`}>Подробнее...</Link>
          </div>)
        }
      </div>
    );
  }
}

NewsList.propTypes = {
  match: React.PropTypes.object.isRequired,
  news: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchNews: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.news.items,
  fetching: state.common.fetching,
  error: state.common.error,
});

export default connect(mapStateToProps, { fetchNews })(NewsList);
