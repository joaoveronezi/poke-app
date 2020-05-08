import React from 'react';

import './Main.scss';
import NavBar from '../NavBar';
import Content from '../Content';


const Main = () => {
    return (
        <div className="Main">
            <NavBar />
            <Content />
        </div>
    )
}

export default Main;