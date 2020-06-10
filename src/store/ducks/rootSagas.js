import { all } from "redux-saga/effects";
import DataSagas from "./pokemons/sagas";

export default function* rootSaga() {
  yield all([...DataSagas]);
}
