import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Rs. {item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <h2>Total: Rs. {total}</h2>
    </div>
  );
}
export default CartItem;
