import { user } from "./reducers/user";
import { products } from "./reducers/products";
import { orders } from "./reducers/orders";
import { cart } from "./reducers/cart";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    user,
    products,
    orders,
    cart,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
