export default function cartReducer(state = {
    cartId: null,
    orderId: null,
    cartItems: [],
    orderList: [],
    addingItemToCart: false,
    placingOrder: false
}, action) {

 
    const localStoredCart =  localStorage.getItem("cart") ? 
    JSON.parse(localStorage.getItem("cart")) :
    localStorage.setItem("cart", JSON.stringify({id: "", items: []}))
    JSON.parse(localStorage.getItem("cart"))
    switch(action.type) {

        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cartId: localStoredCart.id,
                cartItems: localStoredCart.items
            }
           

        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
            return {
                ...state,
                addingItemToCart: true 
            }

            
        case 'PLACING_ORDER':
            console.log("placing order")
            return{ ...state,
             placingOrder: true,
             orderList: localStoredCart.items
            }
         
            
            
            
         default:
            return state
    }
}