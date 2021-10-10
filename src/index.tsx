import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import index from "./store/index";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={index}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
