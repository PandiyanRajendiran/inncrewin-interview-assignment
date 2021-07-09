import * as types from "../types";
import { incrementOne } from "../actions/sample";

export interface SampleState {
  counter: number;
}

export type SampleAction = typeof incrementOne;

const initialState: SampleState = {
  counter: 0,
};

export default (state = initialState, action: SampleAction): SampleState => {
  switch (action.type) {
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.INCREMENT_BY_COUNT:
      return {
        ...state,
        counter: state.counter + (action.count || 0),
      };
    default:
      return state;
  }
};
