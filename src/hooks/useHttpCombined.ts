import { useReducer } from "react";

export type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[];
};

// export type State = {
//   data?: HNResponse;
//   isLoading: boolean;
//   error?: string;
// };

type State =
 | { status: 'empty' }
 | { status: 'loading' }
 | { status: 'error',   error: string }
 | { status: 'success', data: HNResponse };

type Action =
  | { type: "request" }
  | { type: "success"; results: HNResponse }
  | { type: "failure"; error: string };

// function display(action: Action) {
//   if (action.type === "success") {
//     console.log(action.results);
//   }
//   if (action.type === "failure") {
//     console.log(action.error);
//   }
// }

export function httpReducer2(state: State, action: Action): State {
  switch (action.type) {
    case "request":
      return { status: 'loading' };
    case "success":
      return { status: 'success', data: action.results };
    case "failure":
      return { status: 'error', error: action.error };
  }
}

//const initState = { status: 'empty' };
//const [{ status }, dispatch]     = useReducer(reducer, { status: 'empty' });
