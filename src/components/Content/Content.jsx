import React, { Component } from "react";
import { connect } from "react-redux";

import "./Content.scss";

import fetchPokemonsAction from "../../store/sagas";
import {
  getPokemonsError,
  getPokemons,
  getPokemonsPending,
} from "../../store/reducers/pokemons";

class Content extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPokemonsAction());
  }

  render() {
    const { data, error, pending } = this.props;
    if (pending) return <div>Loading...</div>;
    if (error) return console.log(error.message);

    return <div>asd</div>;
  }
}

const mapStateToProps = (state) => ({
  error: getPokemonsError(state),
  data: getPokemons(state),
  pending: getPokemonsPending(state),
});

export default connect(mapStateToProps)(Content);
