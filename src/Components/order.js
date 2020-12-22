import React from 'react';
import Item from './item';



const Order = (props) => {

      const orderList = props.orderList.map((orderList) => <Item item={orderList}/>) 
      console.log("orderlist from order.js:",orderList)
      return(
          <div>
              {orderList}
          </div>
      )    
}


export default Order;