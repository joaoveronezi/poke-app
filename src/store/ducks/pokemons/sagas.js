import { takeLatest, fork, put, call, select } from "redux-saga/effects";
import { fetchPokemonsSuccess, fetchPokemonsError } from "./actions";
import Types from "./Types";
import api from "../../../utils/services/api";

const pokemonResponse = {
  name: "",
  url: "",
};

function* fetchPokemonData({ offset }) {
  try {
    const index = yield select();
    offset = index.data.offset;
    console.log(offset);

    const response = yield call(api.get, `?offset=${offset}&limit=${20}`);

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
  yield takeLatest(Types.FETCH_POKEMON_DATA, fetchPokemonData);
}

const DataSagas = [fork(watcherFetchData)];

export default DataSagas;
