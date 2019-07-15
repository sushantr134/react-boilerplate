import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { helloAction } from "../../../redux/actions/helloAction";

type HomeProps = {
  hello?: any;
  helloAction: () => any;
};

class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }
  componentDidMount() {
    this.props.helloAction();
  }
  render() {
    return (
      <div>
        <h1>hello you are at the home route.</h1>
        {this.props.hello && (
          <h1>Message from Redux Store :- {this.props.hello.msg} </h1>
        )}

        <ul>
          <li>
            <Link to="/sushant">Go to Sushant Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: any) => {
    return {
      hello: state.helloStore
    };
  },
  (dispatch: any) => {
    return bindActionCreators(
      {
        helloAction
      },
      dispatch
    );
  }
)(Home);
