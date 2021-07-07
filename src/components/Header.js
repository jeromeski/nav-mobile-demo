import React, { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';
import OffCanvasOverlay from './OffCanvasOverlay';

const Header = () => {
  const [toggleOffCanvas, setToggleOffCanvas] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.sticky-header');
    setHeaderTop(header.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  const onToggleOffCanvas = () => {
    setToggleOffCanvas((prev) => !prev);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header className="header">
      <Navbar toggle={onToggleOffCanvas} />
      <div
        className={`sticky-header bg-danger d-none d-lg-block ${
          scroll > headerTop ? 'sticky' : ''
        }`}>
        <h3 className="text-light text-center">STICKY HEADER</h3>
      </div>
      <OffCanvasOverlay show={toggleOffCanvas} />
      <MobileMenu show={toggleOffCanvas} toggle={setToggleOffCanvas} />
    </header>
  );
};
export default Header;
