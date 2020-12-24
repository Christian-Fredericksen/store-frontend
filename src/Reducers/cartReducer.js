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
    localStorage.setItem("cart", JSON.stringify({id: "", caartItems: []}))
    JSON.parse(localStorage.getItem("cart"))
    switch(action.type) {

        case 'UPDATE_CART':
            return {
                ...state,
                cartId: localStoredCart.id,
                cartItems: localStoredCart.items
            }

        case 'ADDING_TO_CART':
            return {
                ...state,
                addingItemToCart: true 
            }
            
        case 'PLACING_ORDER':
            return{ ...state,
             placingOrder: true,
             orderList: localStoredCart.items
            }
            
            default:
                return state
    }
}