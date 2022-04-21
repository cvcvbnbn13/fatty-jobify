import React from 'react';
import links from '../../utills/links';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map(link => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
