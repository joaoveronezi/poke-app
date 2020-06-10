import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./ducks/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools ? reduxDevTools : null)
);

sagaMiddleware.run(rootSaga);
export default store;
