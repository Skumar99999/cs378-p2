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
          {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
          <MenuItem
            title={menuItems[0].title}
            description={menuItems[0].description}
            imageName={menuItems[0].imageName}
            price={menuItems[0].price}
          />
          <MenuItem
            title={menuItems[1].title}
            description={menuItems[1].description}
            imageName={menuItems[1].imageName}
            price={menuItems[1].price}
          />
          <MenuItem
            title={menuItems[2].title}
            description={menuItems[2].description}
            imageName={menuItems[2].imageName}
            price={menuItems[2].price}
          />
          <MenuItem
            title={menuItems[3].title}
            description={menuItems[3].description}
            imageName={menuItems[3].imageName}
            price={menuItems[3].price}
          />
          <MenuItem
            title={menuItems[4].title}
            description={menuItems[4].description}
            imageName={menuItems[4].imageName}
            price={menuItems[4].price}
          />
          <MenuItem
            title={menuItems[5].title}
            description={menuItems[5].description}
            imageName={menuItems[5].imageName}
            price={menuItems[5].price}
          />
          <MenuItem
            title={menuItems[6].title}
            description={menuItems[6].description}
            imageName={menuItems[6].imageName}
            price={menuItems[6].price}
          />
          <MenuItem
            title={menuItems[7].title}
            description={menuItems[7].description}
            imageName={menuItems[7].imageName}
            price={menuItems[7].price}
          />
          <MenuItem
            title={menuItems[8].title}
            description={menuItems[8].description}
            imageName={menuItems[8].imageName}
            price={menuItems[8].price}
          />
          <MenuItem
            title={menuItems[9].title}
            description={menuItems[9].description}
            imageName={menuItems[9].imageName}
            price={menuItems[9].price}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
