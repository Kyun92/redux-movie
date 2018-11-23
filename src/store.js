import { createStore, applyMiddleware, compose } from "redux";
import modules from "./modules";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "MyApp",
        actionsBlacklist: ["REDUX_STORAGE_SAVE"]
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(logger, ReduxThunk)
  // other store enhancers if any
);
const store = createStore(modules, enhancer);

export default store;
