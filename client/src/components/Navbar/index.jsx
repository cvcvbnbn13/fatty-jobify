import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/Navbar';
import {
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
  FaCaretUp,
} from 'react-icons/fa';
import { useAppContext } from '../../context/appContext';
import Logo from '../Logo';

const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            {user?.name}
            {showLogout ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              登出
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
