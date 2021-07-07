import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';

const Navbar = ({ toggle }) => {
  return (
    <div className="navbar">
      <div className="container">
        <Logo title="LogoInc" />
        <div className="d-md-none">
          <button className="toggle-button" onClick={() => toggle()}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <ul className="auth-links d-none d-lg-flex">
          <li className="signin">Sign In</li>
          <li className="register">Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
