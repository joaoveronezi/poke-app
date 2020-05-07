import React from 'react';
import '../sass/base/App.scss';

import Main from '../../components/Main';
import Header from  '../../components/Header';
import Footer from '../../components/Footer';

import store from '../../store';

const App = () => {
    const teste = store.getState()
    return (
        <div className="App">
            <Header />
            <Main teste={teste}/>
            <Footer />
        </div>    
    )
}

export default App;