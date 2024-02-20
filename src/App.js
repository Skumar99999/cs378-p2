import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cartItems, setCartItems] = useState(Array(menuItems.length).fill(0));
  const [subtotal, setSubtotal] = useState(0);

  const handleAddItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index]++;
    setCartItems(newCartItems);
    updateSubtotal(newCartItems);
  };

  const handleRemoveItem = (index) => {
    if (cartItems[index] > 0) {
      const newCartItems = [...cartItems];
      newCartItems[index]--;
      setCartItems(newCartItems);
      updateSubtotal(newCartItems);
    }
  };

  const handleClearAll = () => {
    setCartItems(Array(menuItems.length).fill(0));
    setSubtotal(0);
  };

  const updateSubtotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i] * menuItems[i].price;
    }
    setSubtotal(total);
  };

  const handleOrder = () => {
    if (cartItems.every(item => item === 0)) {
      alert("No items in cart");
      return;
    }

    let orderSummary = "Order Summary:\n";
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i] > 0) {
        orderSummary += `${menuItems[i].title}: ${cartItems[i]}\n`;
      }
    }
    alert(orderSummary);
  };

  return (
    <div>
      <header>
        <div className="container">
          <img src={require("./images/food_logo.jpg")} alt="Food App Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
          <p className="lead">Just some food I enjoy</p>
          <h1>Sugi's Top Picks</h1>
        </div>
      </header>
      <section className="container">
        <div className="menu">
          {menuItems.map((item, index) => (
            <div key={item.id}>
              <MenuItem
                title={item.title}
                description={item.description}
                imageName={item.imageName}
                price={item.price}
                handleRemoveItem={() => handleRemoveItem(index)}
                handleAddItem={() => handleAddItem(index)} 
                itemCount={cartItems[index]} 
              />
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="subtotal">
          Subtotal: ${subtotal.toFixed(2)}
        </div>
        <div className="cart-controls">
          <button onClick={handleClearAll}>Clear all</button>
          <button onClick={handleOrder}>Order</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
