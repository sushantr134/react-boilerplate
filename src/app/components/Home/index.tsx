import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>hello you are at the home route.</h1>
        <ul>
          <li>
            <Link to="/sushant">Go to Sushant Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}
