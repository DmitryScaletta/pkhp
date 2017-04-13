import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import * as actions from '../actions/Page';

class Page extends React.Component {
  componentWillMount() {
    const { page, pages, fetchPage } = this.props;
    if (pages[page] === '') fetchPage(page);
  }

  render() {
    const { page, pages, fetching, error, fetchPage } = this.props;

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (pages[page] === '') fetchPage(page);

    return (
      <ReactMarkdown className="markdown-body" source={pages[page]} />
    );
  }
}

Page.propTypes = {
  page: React.PropTypes.string.isRequired,
  pages: React.PropTypes.object.isRequired,
  fetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  fetchPage: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pages: state.page,
  fetching: state.common.fetching,
  error: state.common.error,
});


export default connect(mapStateToProps, actions)(Page);
