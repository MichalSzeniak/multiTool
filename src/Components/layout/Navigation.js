import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

const navList = [{ name: 'Clock', path: '/' },
{ name: 'test1', path: '/' },
{ name: 'test2', path: '/' }];


const navigationItems = navList.map((item) => (
    <NavLink className="navigation__link" to={item.path}>
  <li className="navigation__list--item" key={item.name}>
    {item.name}
  </li>
  </NavLink>
));

const Navigation = () => {
  const [hamburgerActive, sethamburgerActive] = useState(false);

  return (
    <div>
      <Hamburger
        hamburgerActive={hamburgerActive}
        sethamburgerActive={sethamburgerActive}
      />
      <nav
        className={
          hamburgerActive ? 'navigation navigation__active' : 'navigation'
        }
      >
        <ul className="navigation__list">{navigationItems}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
