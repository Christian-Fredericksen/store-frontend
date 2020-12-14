function addItems(items) {
    return {
        type:'ADD_ITEMS',
        payload: items
    }
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_ITEMS'})
        
        fetch('http://localhost:3001/items', {credentials: 'include'}) 
        .then(resp => resp.json())
        .then(resp => {
            dispatch(addItems(resp))
        })
    }
}
