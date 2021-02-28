export default function itemsReducer(state = {
    itemList: [],
    fetchingItems: false
}, action) {
    switch(action.type) {
        case 'FETCHING_ITEMS':
            console.log("fetching items")
            return {
                ...state,
                fetchingItems: true
            }

        case 'ADD_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                itemList: action.payload,
                fetchingItems: false 
            }

        case 'PRODUCT_DETAILS':
            return {
                ...state,
                itemList: action.payload,
                fetchingItems: false 
            }
        default:
            return state
    }
}
