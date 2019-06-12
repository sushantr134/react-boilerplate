import * as React from "react";

interface ComponentProps {
  name?: String;
}

class Sushant extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
  }
  render() {
    return <h1 data-test='heading'>{this.props.name}</h1>;
  }
}

export default Sushant;
