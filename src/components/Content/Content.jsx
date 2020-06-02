import React, { Component } from "react";
import { connect } from "react-redux";

import "./Content.scss";
import PokemonCard from "../PokemonCard";

import { fetchPokemonsPending } from "../../store/actions";

class Content extends Component {
  componentDidMount() {
    this.props.fetchPokemonsPending();
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
            if (item.types.length > 1) {
              return (
                <PokemonCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.sprites.front_default}
                  type1={item.types[0].type.name}
                  type2={item.types[1].type.name}
                />
              );
            }
            return (
              <PokemonCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.sprites.front_default}
                type1={item.types[0].type.name}
              />
            );
          })}
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

export default connect(mapStateToProps, { fetchPokemonsPending })(Content);
