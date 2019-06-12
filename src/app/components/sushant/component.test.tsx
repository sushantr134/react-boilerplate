import * as React from "react";
import { shallow } from "enzyme";

//import component that need to be test
import Sushant from "./component";

//defining component
describe("Sushant Component", () => {
  beforeEach(() => {
    //This method runs before test and will be use for initialisation of props data and other parameters required in the test
  });

  it("It should render without errors", () => {
    //defining tests

    const component = shallow(<Sushant />);
    console.log(component.debug());
    const wrapper = component.find(`[data-test='heading']`);
    expect(wrapper.length).toBe(1);
  });
});
