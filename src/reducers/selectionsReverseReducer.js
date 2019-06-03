import { FETCH_SELECTIONS_REVERSE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SELECTIONS_REVERSE:
      return action.payload;
    default:
      return state;
  }
};
