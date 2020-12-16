import React from 'react';

const Item = props => {
    return(
        <div>
        
            <h4>{props.item.name}</h4> <br></br>
            <img src={props.item.image}></img>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <button type="button" onClick={props.handleButtonClick}>{props.buttonText}</button>
            {/* // dynamically populate the button text */}
             {/* change onClick fn name in props to be generic */}
             {/* onClick={props.handleButtonClick} */}
        </div>
    ) 
}


export default Item;

// item will get passed a set of props descrigin an item.
// that includes the name, description, price, and sellers