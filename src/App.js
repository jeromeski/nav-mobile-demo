import './assets/css/animate.css';
import './assets/scss/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const Logo = ({ title }) => {
  return <span className="logo">{title}</span>;
};

const MobileMenu = ({ show }) => {
  return (
    <div
      className={`offcanvas offcanvas-mobile-menu ${
        show ? 'offcanvas-open' : ''
      }`}></div>
  );
};

const OffCanvasOverlay = ({ show }) => {
  return <div className={`offcanvas-overlay ${show ? 'active' : ''}`}></div>;
};

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
    <div className="header">
      <Navbar toggle={onToggleOffCanvas} />
      <div
        className={`sticky-header bg-danger d-none d-lg-block ${
          scroll > headerTop ? 'sticky' : ''
        }`}>
        <h3 className="text-light text-center">STICKY HEADER</h3>
      </div>
      <OffCanvasOverlay show={toggleOffCanvas} />
      <MobileMenu show={toggleOffCanvas} toggle={setToggleOffCanvas} />
    </div>
  );
};

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

export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
