import * as React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import App from "./app/App";

WebFont.load({
  google: {
    families: ["Raleway", "Baloo Bhai", "Roboto", "sans-serif", "cursive"]
  }
});

ReactDOM.render(<App />, document.getElementById("spotify-app-root"));

//module.hot.accept();
