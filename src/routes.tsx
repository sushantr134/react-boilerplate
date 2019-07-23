import Sushant from "./app/components/sushant/component";
import Home from "./app/components/Home/index";

interface RoutesType {
  path: string;
  component: React.ComponentClass<any> | React.FunctionComponent<any>;
  exact: boolean;
}

export const Routes: Array<RoutesType> = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/:myname",
    component: Sushant,
    exact: true
  }
];

/*Routes must be defined here */
