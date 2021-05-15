import { FETCH_REEL_USD } from "../actions/types";

export default (state = 5.8, action) => {
  switch (action.type) {
    case FETCH_REEL_USD:
      return action.payload;
    default:
      return state;
  }
};
