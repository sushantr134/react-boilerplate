import { HELLO_MSG, Action } from "../types";

export const helloAction = (): Action => {
  return { type: HELLO_MSG, payload: "Hello, redux working fine  !!" };
};
