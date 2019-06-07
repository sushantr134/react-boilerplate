import React from "react";
import PropTypes from "prop-types";

class Sushant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 data-test='heading'>{this.props.name}</h1>;
  }
}

Sushant.propTypes = {
  name: PropTypes.string
};

export default Sushant;
