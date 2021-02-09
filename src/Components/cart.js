import React from 'react';
import Item from './item'

const Cart = (props) => {
    const buttonText = "Remove Item"
    const cartItems = props.cartItems.map((cartItem) =>
    <Item item={cartItem} handleButtonClick={() =>
        props.handleButtonClick(cartItem)} buttonText={buttonText}
    />)
    
    return(
        <div>
            <h1>Shopping Cart</h1>
              {cartItems} 

            <button onClick={props.submitOrder}>Place Order</button>
        </div>
    )
}
 
export default Cart;

 