import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import reducer from "./products/reducer";

const rootReducer = combineReducers({
  products: reducer,
  cart: cartReducer,
});

export default rootReducer;
