import React from 'react';
import { connect } from 'react-redux';
import Item from '../Components/item';
import {addItemToCart} from '../Actions/cartActions'
// import {deleteCartItem} from '../actions/cartActions

const ItemsList = (props) => {
    console.log("FIRST", props)
    const handleAddToCartClick = (item) => {
        console.log(`Adding ${item.name} to cart`)
       props.addItemToCart(item, props.cartId) 
       console.log("LAST", props)
    }

    const buttonText = "Add to cart"

    const items = props.items.map(item => <Item item={item} handleButtonClick={() => handleAddToCartClick(item)} buttonText={buttonText}/>)
    
    return(
        <div>
            {items}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item, cartId) => dispatch(addItemToCart(item, cartId))
});

const mapStateToProps = state => {
    console.log(state)
    console.log(state.items.itemList)
    return({
     items: state.items.itemList,
     cartId: state.cart.cartId
})};


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);