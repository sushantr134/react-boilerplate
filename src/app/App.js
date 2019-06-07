import React from "react";
import styles from "./app-global.module.scss";

import Sushant from "./components/sushant/component";

const App = () => (
  <React.Fragment>
    <h1 className={styles.heading}>Scss modules working...</h1>
    <Sushant />
  </React.Fragment>
);
export default App;
