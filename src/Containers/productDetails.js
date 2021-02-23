import React, { useState } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../Actions/cartActions";

export const productDetails = (props) => { 
  console.log("WHERE ARE MY PROPS!", props)


  // const handleAddToCartClick = (item) => {
  //   props.addItemToCart(item, props.cartId);
  // };

  // const buttonText = "Add to cart";
  // const detailsToRender = searchResults.map((item) => (
  //   <ItemShow
  //     key={item.id}
  //     item={item}
  //     handleButtonClick={() => handleAddToCartClick(item)}
  //     buttonText={buttonText}
  //   />
  // ));

  return (
    <div>
      <h1>Product Page</h1>

      <div className="cards">Product details go here</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item, cartId) => dispatch(addItemToCart(item, cartId)),
});
const mapStateToProps = (state) => {
  return {
    items: state.items.itemList,
    cartId: state.cart.cartId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(productDetails);
