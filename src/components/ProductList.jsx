import React from 'react';
import StoreItem from './StoreItem';

const ProductList = ({ products, handleAdd }) => {
  const productListStyle = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  if (!products || products.length === 0) {
    return (
      <>
        <h1>Product List</h1>
        <p>No products in store!</p>
      </>
    );
  }

  return (
    <>
      <h1>Product List</h1>
      <div style={productListStyle}>
        {products.map((item) => (
          <StoreItem
            key={item.id}
            item={item}
            handleAdd={handleAdd}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
