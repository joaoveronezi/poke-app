import React, { Component } from "react";
import { connect } from "react-redux";

import "./Content.scss";
import PokemonCard from "../PokemonCard";

import {
  // fetchPokemonsPending,
  // filterPokemons,
  fetchPokemonData,
} from "../../store/ducks/pokemons/actions";

class Content extends Component {
  componentDidMount() {
    this.props.fetchPokemonData(0);

    //this.props.fetchPokemonsPending();
  }

  render() {
    const { data, error, loading } = this.props;
    console.log("Console da view =>", data);
    if (loading) return <div>loading...</div>;
    if (error) return console.log(error.menssage);

    return (
      <div className="List">
        {data &&
          data.map((item, index) => {
            return (
              <PokemonCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.sprites.front_default}
                types={item.types}
              />
            );
          })}

        <button onClick={(e) => this.props.fetchPokemonData(40)}>
          CLick me!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data.items,
    error: state.data.error,
    loading: state.data.pending,
  };
};

export default connect(mapStateToProps, {
  fetchPokemonData,
})(Content);
