import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Store from './pages/Store';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { storeInventoryData } from './data/storeInventoryData';

function App() {
  const [cart, setCart] = useState([]);
  const [storeInventory, setStoreInventory] = useState(storeInventoryData);

  function addCartItem(newCartItem) {
    const newItem = { ...newCartItem };
    if (cart.length <= 0) {
      newItem.count = 1;
      setCart((prevState) => [...prevState, newItem]);
      console.log('cart was empty');
    } else if (cart.some((e) => e.id === newItem.id) > 0) {
      console.log('cart found item');

      const itemIndex = cart.findIndex((i) => i.id === newItem.id);
      setCart((cart[itemIndex].count = cart[itemIndex].count+ 1));
      console.log('Item at ' + itemIndex + ' added.');
      console.log(cart[itemIndex].name + ' count: ' + cart[itemIndex].count);
      console.log(newItem.name + ' count: ' + newItem.count);
    } else {
      newItem.count = 1;
      setCart((prevState) => [...prevState, newItem]);
      console.log('Array not empty and new item found');
      console.log(newItem);
    }
  }

  const removeCartItem = (cartItemToRemove) => {
    if (cart.length <= 0) {
      setCart(cart.filter((cartItemToRemove) => cartItemToRemove.id !== id));
    } else {
      if (cart.includes(cartItemToRemove)) {
        cartItemToRemove.count--;
        console.log(newCartItem.name + ' count: ' + cartItemToRemove.count);
        return;
      }
    }

    console.log('Item: ' + cartItemToRemove.name);
    console.table(cart);
  };

  //todo: have to find way to increase count of an item, as opposed to adding it to the array.
  //try just copying the entire storeInventory to cart, adding a property of itemCount or something, then setting
  //itemCount to 0 on the cartArray, then just increment that by 1 when you add an item

  /*
    tip: maybe lol
    use the array.filter method to get the item you want by its ID
    then use a function like addItem or removeItem to increment or decrement its itemCount value

    also compare the cartItem.itemCount to the storeInventory.itemCount so that you cannot buy
    more of an item than is in stock.

    so overall im not actually adding or removing objects from an array, just calling a function for each item
    that adds or removes from its itemCount property

    */

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/store'
          element={
            <Store
              storeProducts={storeInventory}
              cartProducts={cart}
              handleAdd={addCartItem}
            />
          }
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
        <Route
          path='/store/product'
          element={<ProductPage />}
        />
        <Route
          path='cart'
          element={<CartPage />}
        />
      </Routes>
    </>
  );
}

export default App;
