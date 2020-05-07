import '../../assets/sass/base/index.scss'
import React from 'react';
import pokeLog from '../../assets/images/logo.png'
import styled from 'styled-components';


const Header = () => {
    return (
        <div>
            <Logo src={pokeLog} className="logo"></Logo>
        </div>
    )
}

export default Header;


const Logo = styled.img`
    width: 400px;
`