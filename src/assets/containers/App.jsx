import React, { Component } from 'react';
import '../sass/base/App.scss';

import Main from '../../components/Main/Main';
import Header from  '../../components/Header';
import Footer from '../../components/Footer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>    
        )
    }
};

export default App;