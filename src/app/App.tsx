import * as React from "react";
import styles from "./app-global.module.scss";

import Sushant from "./components/sushant/component";

const App: React.FunctionComponent<{}> = () => (
  <>
    <h1 className={styles.heading}>Scss modules working...</h1>
    <Sushant name={"sda"} />
  </>
);
export default App;
