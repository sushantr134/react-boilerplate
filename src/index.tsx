import * as React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import App from "./app/App";

import { Provider } from "react-redux";
import Store from "./redux/store";

WebFont.load({
  google: {
    families: ["Raleway", "Baloo Bhai", "Roboto", "sans-serif", "cursive"]
  }
});

const AppStore: any = Store({});

const ReduxApp = () => (
  <Provider store={AppStore}>
    <App />
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById("spotify-app-root"));

//module.hot.accept();
