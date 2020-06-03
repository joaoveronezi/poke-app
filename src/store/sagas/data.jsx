import { takeEvery, fork, put, call } from "redux-saga/effects";
import { fetchPokemonsSuccess, fetchPokemonsError } from "../actions";
import { FETCH_POKEMONS_PENDING } from "../../utils/constants/action-types";
//import * as actions from "../actions";

import api from "../../utils/services/api";

const pokemonResponse = {
  name: "",
  url: "",
};

function* fetchPokemonData() {
  try {
    const response = yield call(api.get, "?offset=0&limit=20");
    console.log("Console do saga", response.data);
    const requests = yield Promise.all(
      response.data.results.map((k = { pokemonResponse }) => api.get(k.url))
    );

    const pokemons = requests.map((res) => res.data);
    console.log("Console do saga2", pokemons);

    yield put(fetchPokemonsSuccess(pokemons));
  } catch (error) {
    yield put(fetchPokemonsError(error));
  }
}

function* watcherFetchData() {
  yield takeEvery(FETCH_POKEMONS_PENDING, fetchPokemonData);
}

const DataSagas = [fork(watcherFetchData)];

export default DataSagas;
