import React from 'react';

const BackDrop = ({ activeClass, click }) => (
  <div className={activeClass} onClick={click}></div>
);

export default BackDrop;
