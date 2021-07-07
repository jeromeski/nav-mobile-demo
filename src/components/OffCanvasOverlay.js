import React from 'react';

const OffCanvasOverlay = ({ show }) => {
  return <div className={`offcanvas-overlay ${show ? 'active' : ''}`}></div>;
};

export default OffCanvasOverlay;
