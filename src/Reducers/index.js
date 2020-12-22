import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    user: usersReducer,
    items: itemsReducer,
    cart: cartReducer
})

