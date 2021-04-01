import { user } from "./reducers/user";
import { products } from "./reducers/products";
import { orders } from "./reducers/orders";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    user,
    products,
    orders,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
