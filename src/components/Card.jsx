import React from 'react';
import ProductButton from './ProductButton';

const Card = ({ children, product, buttonAdd }) => {
  const cardStyle = {
    border: '2px solid black',
    width: '10rem',
    marginBlock: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
  };
  return (
    <div style={cardStyle}>
      {children}
      <ProductButton
        item={product}
        text='ADD TO CART'
        handleClick={buttonAdd}
      />
      {/* <button onClick={() => buttonAdd(product)}>ADD TO CART</button> */}
    </div>
  );
};

export default Card;
