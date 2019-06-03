import { combineReducers } from "redux";
import coinbaseReducer from "./coinbaseReducer";
import coinbaseReverseReducer from "./coinbaseReverseReducer";
import usdReducer from "./usdReducer";
import krakenReducer from "./krakenReducer";
import selectionsReducer from "./selectionsReducer";
import selectionsReverseReducer from "./selectionsReverseReducer";

export default combineReducers({
  coinbase: coinbaseReducer,
  coinbaseReverse: coinbaseReverseReducer,
  kraken: krakenReducer,
  usd: usdReducer,
  selections: selectionsReducer,
  selectionsReverse: selectionsReverseReducer
});
