import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
import storage from '@react-native-async-storage/async-storage';

import reducers from "./reducer";

const config = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const reducer = persistReducer(config, reducers);
const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(reducer, initialState, composedEnhancers);
export const persistor = persistStore(store);