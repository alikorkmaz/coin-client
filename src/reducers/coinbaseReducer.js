import { FETCH_COINBASE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COINBASE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
