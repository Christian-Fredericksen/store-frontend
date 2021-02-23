import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemPic = props => {

    return(
        <div className="card"> 
         
            <img src={props.item.image}alt={"🙄"} ></img><br></br>
            <p >{props.item.name} </p> <br></br>
            {/* <t>{props.item.description}</t><br></br> */}
            {/* <t>{props.item.price}</t><br></br> */}

            <button className="itemShow"><NavLink to='/items/:id'>Product Details</NavLink></button>
            {/* <button type="button" onClick={props.handleButtonClick}>{props.buttonText}</button> */}
        </div>
    ) 
}

export default ItemPic;

