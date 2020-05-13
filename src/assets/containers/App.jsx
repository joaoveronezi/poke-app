import React from 'react';
import '../sass/base/App.scss';

import Main from '../../components/Main/Main';
import Header from  '../../components/Header';
import Footer from '../../components/Footer';


const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>    
    )
}
export default App;