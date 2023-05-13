import React from 'react';
import Product from './Product';
import CartItem from './CartItem';

const CartList = ({ products }) => {
  const listStyle = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  if (!products || products.length === 0) {
    return (
      <>
        <h1>Cart List</h1>
        <p>No products in cart yet!</p>
      </>
    );
  }
  return (
    <>
      <h1>Cart List</h1>
      <div style={listStyle}>
        {products.map((product) => (
          <CartItem
            key={product.id}
            item={product}
          />
        ))}
      </div>
    </>
  );
};

export default CartList;
