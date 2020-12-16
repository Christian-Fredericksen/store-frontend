export default function cartReducer(state = {
    cartId: null,
    cartItems: [],
    total: 0,
    addingItemToCart: false,
    placingOrder: false
}, action) {

    // the below line is what causes app local storage to have an empty cart on page reload, even
    // if there was none there, as i caused by invoking localStorage.clear().
    // it looks in localstorage, and if it doesnt find a cart it sets one. 

    const localStoredCart =  localStorage.getItem("cart") ? 
        JSON.parse(localStorage.getItem("cart")) :
        localStorage.setItem("cart", JSON.stringify({id: "", cartItems: []}))
        JSON.parse(localStorage.getItem("cart"))
    
    switch(action.type) {

        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cartId: localStoredCart.id,
                cartItems: localStoredCart.items,
                // total: localStoredCart.total
                // cartId: action.payload.cart.id,
                // cartItems: action.payload.cart.items,
                // total: action.payload.cart.total
            }

        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
            return {
                ...state,
                addingItemToCart: true
            }
            
        case 'PLACING_ORDER':
            console.log("placing order")
            
        default:
            return state
    }
}