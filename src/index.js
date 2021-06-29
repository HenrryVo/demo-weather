import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/common.scss";
import "react-toastify/dist/ReactToastify.css";
import "./web.config";

import App from "./App";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <>
    <App />
    <ToastContainer />
  </>,
  document.getElementById("root")
);