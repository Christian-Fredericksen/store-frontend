function addItems(items) {
    return {
        type:'ADD_ITEMS',
        payload: items
    }
}

function productDetails(items) {
    return {
        type:'PRODUCT_DETAILS',
        payload: items
    }
}

export const fetchItems = () => {
    return (dispatch) => { 
        dispatch({type: 'FETCHING_ITEMS'})
        
        fetch('http://localhost:3000/items') 
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            dispatch(addItems(resp))
            dispatch(productDetails(resp))
        })
    }
}
