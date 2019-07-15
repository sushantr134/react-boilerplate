import { HELLO_MSG, Action } from "../types";

const IntialState: any = {};

const helloReducer = (state = IntialState, action: Action) => {
  switch (action.type) {
    case HELLO_MSG:
      return {
        ...state,
        msg: action.payload
      };

    default:
      return state;
  }
};

export default helloReducer;
