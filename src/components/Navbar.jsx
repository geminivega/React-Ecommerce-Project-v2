import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const container = {
    height: '60px',
    marginBottom: '20px',
    padding: '10px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <div style={container}>
      <nav style={navStyle}>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='store'>Store</Link>
        </div>
        <div>
          <Link to='checkout'>Checkout</Link>
        </div>
        <div>
          <Link to='cart'>Cart</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
