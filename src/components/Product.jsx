import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

const Product = ({ item }) => {
  const imgStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const nameStyle = {
    marginBlock: '0.1rem',
    fontSize: '22px',
    fontWeight: '700',
  };
  return (
    <div>
      <Link to='/store/product'>
        <h3 style={nameStyle}>{item.name}</h3>
      </Link>
      <br></br>
      <img
        src={item.imageSource}
        style={imgStyle}
      />
      <br></br>
      <span>Price: {item.price}</span>
      <br></br>
      <span>Count: {item.count}</span>
    </div>
  );
};

export default Product;
