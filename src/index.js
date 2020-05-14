import './assets/sass/base/index.scss';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './assets/containers/App.jsx';

const render = () => {
    return ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));
}

render();

store.subscribe(render);

