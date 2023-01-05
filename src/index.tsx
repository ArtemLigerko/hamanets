import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import { store, persistor } from "./redux/store";
// import "reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net";
import "datatables.net-bs5";

const GlobalStyles = createGlobalStyle`
body {
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
}
`;

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
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
