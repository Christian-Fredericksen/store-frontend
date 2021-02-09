export const addItemToCart = (item, cartId) => {
    console.log('b')
    return (dispatch) => {
        console.log('c')
        dispatch({type:'ADDING_TO_CART'})
        fetch('http://localhost:3000/carts', 
        {
          method: 'POST',  
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           item: item,
           cart_id: cartId
          }),
        })
        .then(resp => resp.json())
        .then(res => {
            console.log('d')
            localStorage.setItem("cart", JSON.stringify(res.cart))
            dispatch(updateCart(res))
        })
        console.log('e')
    }
}


export const removeFromCart = (item, cartId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/carts/${cartId}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: {
                    itemId: item.id
                }
            })
       })
       .then(resp => resp.json())
       .then(res => {
        localStorage.setItem("cart", JSON.stringify(res.cart))
        dispatch(updateCart(res))
        })
    }
}

export const placeOrder = () => {
    
    return (dispatch) => {
       dispatch({type: 'PLACING_ORDER'})
       fetch('http://localhost:3000/orders', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }
       })
       .then(res => res.json())
       .then(res => {
            localStorage.setItem("order", JSON.stringify(res))
            localStorage.setItem("cart", JSON.stringify({id: "", items: []}))
            dispatch(updateCart(res.order))
        })
        
    }
}

export const updateCart = (cart) => {
    return {
        type: 'UPDATE_CART',
        payload: cart
    }
}

