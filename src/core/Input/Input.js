import React from 'react';

import './Input.css';

export default ({ label, changed, type }) => {
  return (
    <div className="Input-container">
      <h5>{label}</h5>
      <input
        onChange={event => changed(event.target.value)}
        type={type}
      ></input>
    </div>
  );
};
