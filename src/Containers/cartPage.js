import React from 'react';
import { connect } from 'react-redux';
import Cart from '../Components/cart';
import { placeOrder, removeFromCart } from '../Actions/cartActions';

const CartPage = (props) => { 
    // the CartPage calls cart, and passes it a list of items in the cart, a function to handle submitting
    // the cart and a function to each Item to handle deleting the item. 
    const handleSubmitOrder = () => {
        // get passed to Cart
        props.submitOrder()
    }

    const handleDeleteItem = (item) => {
        // get passed to Cart which then passes it on to each Item
        props.removeFromCart(item, props.cartId)
    }

    // you should define a fn here called handleDeleteItem(item) that calls props.deleteItem(item)

    return(
        <div>
            <Cart cartItems={props.cartItems} total={props.total} submitOrder={handleSubmitOrder} handleButtonClick={(item) => handleDeleteItem(item)}/>
            {/* you should pass in a fn that will be passed on by Cart into item that handles deleting an item */}
            {/* handleButtonClick={handleDeleteItem(item)} */}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    submitOrder: () => dispatch(placeOrder()),
    removeFromCart: (item, cartId) => dispatch(removeFromCart(item, cartId))
    // include a dispatch to delete an item
});


const mapStateToProps = state => ({
     cartItems: state.cart.cartItems,
     cartId: state.cart.cartId
});


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);