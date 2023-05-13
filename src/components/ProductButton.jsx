import React from 'react';

const ProductButton = ({ handleClick, item, text }) => {
  if (handleClick == null) {
    return;
  } else {
    return <button onClick={() => handleClick(item)}>{text}</button>;
  }
};

export default ProductButton;
