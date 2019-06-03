import api from "../api";
import {
  FETCH_COINBASE,
  FETCH_COINBASE_REVERSE,
  FETCH_USD,
  FETCH_KRAKEN,
  FETCH_SELECTIONS_REVERSE,
  FETCH_SELECTIONS
} from "./types";
import axios from "axios";

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

export const addSelections = titles => async dispatch => {
  await axios.post("http://coin-serv.herokuapp.com/alert", titles);
};

export const removeSelections = titles => async dispatch => {
  await axios.post("http://coin-serv.herokuapp.com/alert-delete", titles);
};

export const fetchSelections = () => async dispatch => {
  const response = await api.get("/alert");
  dispatch({ type: FETCH_SELECTIONS, payload: response.data });
};

export const addSelectionsReverse = titles => async dispatch => {
  await axios.post("http://coin-serv.herokuapp.com/alert-reverse", titles);
};

export const removeSelectionsReverse = titles => async dispatch => {
  await axios.post(
    "http://coin-serv.herokuapp.com/alert-reverse-delete",
    titles
  );
};

export const fetchSelectionsReverse = () => async dispatch => {
  const response = await api.get("/alert-reverse");
  dispatch({ type: FETCH_SELECTIONS_REVERSE, payload: response.data });
};
