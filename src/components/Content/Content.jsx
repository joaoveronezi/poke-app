import React, { Component } from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import { loadPokemon } from '../../store/sagas';

/*
Esse component irá mostrar a lista de pokemons
requisitada pela API
*/

class Content extends Component {

    componentDidMount() {
        this.props.dispatch(loadPokemon());
    }

    render() {
        const { error, loading, pokemons } = this.props;
        
        if (error) {
            return <div> Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <ul>
                {pokemons.map(pokemon =>
                    <li key={pokemon.id}>{pokemon.name}</li>
                )}
            </ul>
        )
    }
};

const mapStateToProps = state => ({
    pokemons: state.items,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(Content);