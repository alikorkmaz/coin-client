import { FETCH_KRAKEN } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_KRAKEN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
