import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

import "./styles/reset.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

$(document).ready(() => {
  $("#transactions").DataTable({
    paging: true,
    // pagingType: "scrolling",
  });
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
