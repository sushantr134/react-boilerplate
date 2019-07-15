export const HELLO_MSG = "HELLO_MSG";

interface HelloAction {
  type: typeof HELLO_MSG;
  payload: string;
}

export type Action = HelloAction;
