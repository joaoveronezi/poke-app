import '../../assets/sass/base/index.scss'
import React from 'react';
import pokeLog from '../../assets/images/logo.png'
import styled from 'styled-components';


const Header = () => {
    return (
        <div>
            <Logo src={pokeLog}></Logo>
            <p>Procure e veja agora seu pokemon!</p>
        </div>
    )
}

export default Header;


const Logo = styled.img`
    width: 300px;
`