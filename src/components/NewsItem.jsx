import React from 'react';
import { connect } from 'react-redux';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchNewsById } from '../actions/News';

class NewsItem extends React.Component {
  componentWillMount() {
    this.props.fetchNewsById(Number(this.props.match.params.id));
  }

  render() {
    const { item, fetching, error } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="news-item">
        <div className="news-item__back">
          <Link className="news-item__link" to="/news">← Назад</Link>
        </div>
        <div className="news-item__title">{item.title}</div>
        <div className="news-item__date">{item.date}</div>
        <div className="news-item__text">
          <ReactMarkdown className="markdown-body" source={item.text || ''} />
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  match: React.PropTypes.object.isRequired,
  item: React.PropTypes.object.isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchNewsById: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  item: state.news.current,
  fetching: state.common.fetching,
  error: state.common.error,
});

export default withRouter(connect(mapStateToProps, { fetchNewsById })(NewsItem));
