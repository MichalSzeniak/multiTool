import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import logo from '../../Assets/logo.svg';

const navList = [{ name: 'Clock', path: '/' },
{ name: 'To do list', path: '/toDoList' },
{ name: 'stopwatch', path: '/stopwatch' },
{ name: 'notebook', path: '/notebook' },
{ name: 'weather', path: '/weather' },
];




const Navigation = () => {
  const [hamburgerActive, sethamburgerActive] = useState(false);

  const handleHamburger = () => {
    sethamburgerActive(!hamburgerActive)
}

const navigationItems = navList.map((item) => (
  <NavLink className="navigation__link" exact to={item.path} onClick={handleHamburger} key={item.name}>
<li className="navigation__list--item">
  {item.name}
</li>
</NavLink>
));

  return (
    <div>
      <Hamburger
      handleHamburger={handleHamburger}
      hamburgerActive={hamburgerActive}
      />
      <div className="logo">
        <img src={logo}/>
      </div>
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
