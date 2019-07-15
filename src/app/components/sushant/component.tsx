import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface RecvParametersFromRoute {
  myname: string;
}

interface ComponentProps extends RouteComponentProps<RecvParametersFromRoute> {}

class Sushant extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
  }
  render() {
    return <h1 data-test="heading">{this.props.match.params.myname}</h1>;
  }
}

export default Sushant;
