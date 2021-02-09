import React from 'react';
import { connect } from 'react-redux';
import Cart from '../Components/cart';
import { placeOrder, removeFromCart } from '../Actions/cartActions';

const CartPage = (props) => { 
    const handleSubmitOrder = () => {
        props.submitOrder()
    }
 
    const handleDeleteItem = (item) => {
        props.removeFromCart(item, props.cartId)
    }

    return(
        <div>
            <Cart cartItems={props.cartItems} total={props.total} submitOrder={handleSubmitOrder} handleButtonClick={(item) => handleDeleteItem(item)}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    submitOrder: () => dispatch(placeOrder()),
    removeFromCart: (item, cartId) => dispatch(removeFromCart(item, cartId))
});


const mapStateToProps = state => ({
     cartItems: state.cart.cartItems,
     cartId: state.cart.cartId
});


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);