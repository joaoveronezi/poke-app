import React from 'react';
import './Main.scss';

/*
Esse component irá mostrar a lista de pokemons
requisitada pela API
*/

const Main = ({teste}) => {
    return (
        <div className="Main">
            <NavBar />
            <Content />
            <h1>{ teste }</h1>
        </div>
    )
}

export default Main;