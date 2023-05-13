import React from 'react';
import Product from './Product';
import Card from './Card';

const CartItem = ({ item }) => {
  return (
    <Card
      product={item}
    >
      <Product item={item} />
    </Card>
  );
};

export default CartItem;
