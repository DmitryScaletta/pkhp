import React from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import Page from './Page';
import Gallery from './Gallery';
import Awards from './Awards';

const aboutMenu = [
  {
    name: 'История',
    url: '',
  },
  {
    name: 'Качество',
    url: '/quality',
  },
  {
    name: 'Награды',
    url: '/awards',
  },
  {
    name: 'Галерея',
    url: '/gallery',
  },
];

const About = ({ match }) => (
  <Router>
    <div className="about">
      <h2>О нас</h2>

      <ul className="about-menu">
        { aboutMenu.map((item, index) => (
          <li key={index} className="about-menu__item">
            <NavLink
              className="about-menu__link"
              activeClassName="about-menu__link--active"
              exact
              to={`${match.url}${item.url}`}
            >
              {item.name}
            </NavLink>
          </li>
        )) }
      </ul>

      <Route exact path={`${match.url}`} render={() => <Page page="history" />} />
      <Route path={`${match.url}/quality`} render={() => <Page page="quality" />} />
      <Route path={`${match.url}/awards`} render={() => <Awards />} />
      <Route path={`${match.url}/gallery`} render={() => <Gallery />} />
    </div>
  </Router>
);

About.propTypes = {
  match: React.PropTypes.object.isRequired,
};

export default About;
