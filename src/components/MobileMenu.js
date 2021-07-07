import React from 'react';
import CloseButton from './CloseButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = ({ show, toggle }) => {
  return (
    <div
      className={`offcanvas offcanvas-mobile-menu ${
        show ? 'offcanvas-open' : ''
      }`}>
      <CloseButton icon={faTimes} toggle={toggle} />
    </div>
  );
};

export default MobileMenu;
