import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,

  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
);

export default store;
