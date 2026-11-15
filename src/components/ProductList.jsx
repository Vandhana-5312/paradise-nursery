import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', price: 299, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Aloe Vera', price: 199, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Money Plant', price: 249, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Peace Lily', price: 399, image: 'https://via.placeholder.com/150' },
];

function ProductList() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Paradise Nursery - Products</h1>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Rs. {plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
