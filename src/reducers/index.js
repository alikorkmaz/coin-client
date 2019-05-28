import { combineReducers } from "redux";
import coinbaseReducer from "./coinbaseReducer";
import coinbaseReverseReducer from "./coinbaseReverseReducer";
import usdReducer from "./usdReducer";

export default combineReducers({
  coinbase: coinbaseReducer,
  coinbaseReverse: coinbaseReverseReducer,
  usd: usdReducer
});
