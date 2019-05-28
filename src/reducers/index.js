import { combineReducers } from "redux";
import coinbaseReducer from "./coinbaseReducer";
import coinbaseReverseReducer from "./coinbaseReverseReducer";
import usdReducer from "./usdReducer";
import krakenReducer from "./krakenReducer";

export default combineReducers({
  coinbase: coinbaseReducer,
  coinbaseReverse: coinbaseReverseReducer,
  kraken: krakenReducer,
  usd: usdReducer
});
