import React from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const menu = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'О нас',
    href: '/about',
  },
  {
    name: 'Вакансии',
    href: '/vacancies',
  },
  {
    name: 'Продукция',
    href: '/catalog',
  },
  {
    name: 'Контакты',
    href: '/contacts',
  },
  {
    name: 'Обратная связь',
    href: '/feedback',
  },
  {
    name: 'Новости',
    href: '/news',
  },
];

const Header = () => (
  <div className="header">
    <div className="header__menu-wrapper">
      <div className="header__menu">
        <ul className="menu">
          { menu.map(item => (
            <li key={item.href} className="menu__item">
              <NavLink
                exact={item.href === '/'}
                to={item.href}
                className="menu__link"
                activeClassName="menu__link--active"
              >
                {item.name}
              </NavLink>
            </li>
          )) }
        </ul>
      </div>
    </div>
    <div className="header__content-wrapper">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <img src="media/logo.png" alt="" />
          </Link>
        </div>
        <div className="header__title">
          <h1>ОАО «Пинский комбинат хлебопродуктов»</h1>
          Крупнейший производитель муки для производства хлебобулочных изделий и комбикормов
          для всех видов животных, рыбы и птицы в Брестской области
        </div>
      </div>
    </div>
  </div>
);

export default Header;
