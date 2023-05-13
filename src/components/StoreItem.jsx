import React from 'react';
import Card from './Card';
import Product from './Product';

const StoreItem = ({ item, handleAdd }) => {
  return (
    <Card
      buttonAdd={handleAdd}
      product={item}
    >
      <Product item={item} />
    </Card>
  );
};

export default StoreItem;
