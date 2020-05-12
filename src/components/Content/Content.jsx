import React, { Component } from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import * as Actions from '../../store/sagas';

/*
Esse component irá mostrar a lista de pokemons
requisitada pela API
*/
class Content extends Component {
    render() {
        return (
            <button onClick={this.props.loadPokemon} >Click me!</button>
        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect (mapStateToProps, Actions)(Content); 