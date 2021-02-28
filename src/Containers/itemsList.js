import React, { useState } from "react";
import { connect } from "react-redux";
import ItemPic from "../Components/item";
import { addItemToCart } from "../Actions/cartActions";
import SearchBar from "../Components/search";

const ItemsList = (props) => { 
  console.log(props)
  const [searchState, setSearchState] = useState("");

  const handleChange = (event) => {
    setSearchState(event.target.value); 
  };

  const handleAddToCartClick = (item) => {
    props.addItemToCart(item, props.cartId);
  };

  const buttonText = "Add to cart";
  const searchResults = props.items.filter((item) => {
    if (searchState == "") {
      return item;
    } else if (
      item.name.toLowerCase().includes(searchState.toLocaleLowerCase())
    ) {
      return item;
    }
  });
  const itemsToRender = searchResults.map((item) => (
    <ItemPic 
      key={item.id}
      item={item}
      handleButtonClick={() => handleAddToCartClick(item)}
      buttonText={buttonText}
    />
  ));
 
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <SearchBar handleChange={handleChange} />
      </div>

      <div className="cards">{itemsToRender}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
