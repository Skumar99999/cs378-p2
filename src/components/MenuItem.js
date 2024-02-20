import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

import '../App.css'; // Import the CSS file for styling

const MenuItem = ({ title, description, imageName, price, handleRemoveItem, handleAddItem, itemCount }) => {
    return (
        <div className="food-item">
            <img src={require(`../images/${imageName}`)} alt={title} className="img-fluid square-image" />
            <div className="food-details">
                <h2 className="menu-item">{title}</h2>
                <p>{description}</p>
                <div className="price-and-add">
                    <p className="price">Price: ${price.toFixed(2)}</p>
                    <div className="item-controls">
                        <button onClick={handleRemoveItem}>-</button>
                        <span>{itemCount}</span>
                        <button onClick={handleAddItem}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
