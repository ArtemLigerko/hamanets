import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store, persistor } from "./redux/store";
import "./styles/reset.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
