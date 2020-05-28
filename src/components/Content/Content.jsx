import React, { Component } from "react";
import { connect } from "react-redux";

import "./Content.scss";

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
      <div>
        <h1>teste</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("App state =>", state);
  return {
    data: state.data.items,
    error: state.data.error,
    loading: state.data.pending,
  };
};

export default connect(mapStateToProps, { fetchPokemonsPending })(Content);
