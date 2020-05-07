import { createStore } from 'redux';
import reducer from './reducers';

const initialState = "Conteúdo";

const store = createStore(reducer, initialState);

export default store;

