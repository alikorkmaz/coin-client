import { FETCH_COINBASE_REVERSE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COINBASE_REVERSE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
