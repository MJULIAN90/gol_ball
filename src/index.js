import React from "react";
import ReactDOM from "react-dom";
import {TransactionProvider} from '../src/context/TransactionContext'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  rootElement
);
