import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "core-js";
import "regenerator-runtime";

import configureStore from "./state";

import App from "./views/containers/App";
import ErrorBoundary from "./ErrorBoundary";

const store = configureStore();


const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>,
    document.querySelector("#root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./views/containers/App", renderApp);
}

renderApp();
