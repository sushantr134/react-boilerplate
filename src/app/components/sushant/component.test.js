import React from "react";
import { shallow } from "enzyme";

import checkPropTypes from "check-prop-types";

//import component that need to be test
import Sushant from "./component";

//defining component
describe("Sushant Component", () => {
  beforeEach(() => {
    //This method runs before test and will be use for initialisation of props data and other parameters required in the test
  });

  describe("checking prop-types", () => {
    it("should not throw any warnings", () => {
      const expectedProps = {
        name: "112"
      };

      const propsErrors = checkPropTypes(Sushant.propTypes, expectedProps, "props", Sushant.name);
      expect(propsErrors).toBeUndefined();
    });
  });

  it("It should render without errors", () => {
    //defining tests
    const component = shallow(<Sushant />);
    console.log(component.debug());
    const wrapper = component.find(`[data-test='heading']`);
    expect(wrapper.length).toBe(1);
  });
});
