import React from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

const News = ({ match }) => (
  <Router>
    <Switch>
      <Route exact path={match.url} component={NewsList} />
      <Route path={`${match.url}/:id`} component={NewsItem} />
    </Switch>
  </Router>
);

News.propTypes = {
  match: React.PropTypes.object.isRequired,
};

export default withRouter(connect()(News));
