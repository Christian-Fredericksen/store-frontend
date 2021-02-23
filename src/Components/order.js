import React from 'react';
import Item from './item';



const Order = (props) => {

    const orderList = props.orderList.map((orderList) => <Item item={orderList}/>) 
    return(
        <div>
            <h1>Your Order</h1>
            {orderList}
        </div>
    )    
} 

export default Order;