import React from "react"
import ReactDOM from "react-dom/client";
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"

import store from "./store"

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app)
serviceWorker.unregister()