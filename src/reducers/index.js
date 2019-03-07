import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  menus: menuReducer,
  auth: authReducer,
  orders: orderReducer,
  cart: cartReducer,
});
