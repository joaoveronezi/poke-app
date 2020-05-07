import './assets/sass/base/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const render = () => {
    return ReactDOM.render(<App />, document.getDocumentById("root"));
}

render();

