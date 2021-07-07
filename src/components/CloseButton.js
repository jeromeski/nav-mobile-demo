import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CloseButton({ icon, toggle }) {
  return (
    <button className="close-button" onClick={() => toggle()}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  );
}

export default CloseButton;
