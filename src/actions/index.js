import api from "../api";
import {
  FETCH_COINBASE,
  FETCH_COINBASE_REVERSE,
  FETCH_USD,
  FETCH_KRAKEN
} from "./types";

export const fetchCoinbase = () => async dispatch => {
  const response = await api.get("/coinbase");
  dispatch({ type: FETCH_COINBASE, payload: response.data });
};

export const fetchCoinbaseReverse = () => async dispatch => {
  const response = await api.get("/coinbaseReverse");
  dispatch({ type: FETCH_COINBASE_REVERSE, payload: response.data });
};

export const fetchUsd = () => async dispatch => {
  const response = await api.get("/kur");
  dispatch({ type: FETCH_USD, payload: response.data.kur });
};

export const fetchKraken = () => async dispatch => {
  const response = await api.get("/kraken");
  dispatch({ type: FETCH_KRAKEN, payload: response.data });
};
