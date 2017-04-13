import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Catalog from './Catalog';
import News from './News';
import Page from './Page';
import Feedback from './Feedback';

const Home = () => (
  <Router>
    <div className="container">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Page page="main" />} />
          <Route path="/about" component={About} />
          <Route path="/vacancies" render={() => <Page page="vacancies" />} />
          <Route path="/catalog/:level1?/:level2?/:level3?" component={Catalog} />
          <Route path="/contacts" render={() => <Page page="contacts" />} />
          <Route path="/feedback" render={() => <div><Page page="feedback" /><Feedback /></div>} />
          <Route path="/news" component={News} />
          <Route path="/sites" render={() => <Page page="sites" />} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default Home;
