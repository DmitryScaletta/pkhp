import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <div className="footer__inner">
      <div className="footer__address">
        225710, г. Пинск, ул. Индустриальная, 3. <br />
        (+375 165) 34-76-26, (+375 165) 34-34-12
      </div>
      <div className="footer__contacts">
        e-mail: <a href="mailto:pinskkxp@tut.by">PinskKXP@tut.by</a> <br />
        skype: <a href="skype:pinskkxp?call">pinskkxp</a>
      </div>
      <div className="footer__links">
        <Link to="/sites">Полезные сайты</Link>
      </div>
    </div>
  </div>
);

export default Footer;
