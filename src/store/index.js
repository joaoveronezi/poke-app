import { createStore } from 'redux';
import reducer from './reducers';

const initialState = "Hello World";

const store = createStore(reducer, initialState);

export default store;

