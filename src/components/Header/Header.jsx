
import React from 'react';
import pokeLog from '../../assets/images/logo.png'
import './Header.scss';


const Header = () => {
    return (
        <div>
            <img alt="Logo" src={pokeLog} />
        </div>
    )
}

export default Header;
