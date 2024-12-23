/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import appConfig from "./store/settings"

axios.interceptors.request.use((request) => {
  request.url = appConfig.apiPath + request.url;
  return request;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
