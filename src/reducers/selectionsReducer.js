import { FETCH_SELECTIONS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SELECTIONS:
      return action.payload;
    default:
      return state;
  }
};
