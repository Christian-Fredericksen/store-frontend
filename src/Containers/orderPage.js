import React from 'react';
import { connect } from 'react-redux';
import Order from '../Components/order';

const OrderPage = (props) =>{
    console.log("from orderpage",props)

 

    return(
        <div>
         <Order orderList={props.orderList}/>
        </div>
    )
}

const mapStateToProps = state => ({
    orderList: state.cart.orderList,
});

export default connect(mapStateToProps)(OrderPage);