import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// let the Redux Devtools Extensions work their magic
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App/App";
import reducers from "./reducers"; // looks for index.js by default, which is where reducers are combined

ReactDOM.render(
  // wrap app in provider to allow Redux store to talk to the app. Pass the value of createStore to Provider. Pass all the reducers to createStore

  <Provider store={createStore(reducers, composeWithDevTools())}>
    <App />
  </Provider>,
  document.querySelector("#root")
);