import React from 'react';
import '../sass/base/App.scss';

import MainContent from '../../components/MainContent';
import Header from  '../../components/Header';
import Footer from '../../components/Footer';

import store from '../../store';

const App = () => {
    const teste = store.getState()
    return (
        <div className="App">
            <Header />
            <MainContent teste={teste}/>
            <Footer />
        </div>    
    )
}

export default App;