import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import CartList from '../components/CartList';

const Store = ({ storeProducts, cartProducts, handleAdd }) => {
  return (
    <>
      <h1>Store</h1>
      <ProductList
        products={storeProducts}
        handleAdd={handleAdd}
      />
      <br></br>
      <CartList products={cartProducts} />
    </>
  );
};

export default Store;
