// import React, {Component} from 'react';


// class ItemShow extends Component{
//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                 <h1>Product Details</h1>
//                 <div className="card"> 
//                     <img src={this.props.image}alt={"🙄"} ></img>
//                     <h4 >{this.props.name} </h4> <br></br>
//                     <p>{this.props.description}</p>
//                     <p>{this.props.price}</p>

//                 </div>

//             </div>
//         )
//     }
// }

// export default ItemShow;

import React from 'react';
// import { NavLink } from 'react-router-dom';

const ItemShow = props => {
console.log("batman", props)
    return(
        <div className="card"> 
         
            <img src={props.item.image}alt={"🙄"} ></img><br></br>
            <p >{props.item.name} </p> <br></br>
            <t>{props.item.description}</t><br></br>
            <t>{props.item.price}</t><br></br>

            <button className="itemShow"><NavLink to='/items/:id'>Product Details</NavLink></button>
            <button type="button" onClick={props.handleButtonClick}>{props.buttonText}</button>
        </div>
    ) 
}

export default ItemShow;




